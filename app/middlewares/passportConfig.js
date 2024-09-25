import bcrypt from 'bcrypt';
import debug from 'debug';
import jwt from 'jsonwebtoken';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import authDataMapper from '../models/auth.dataMapper.js';
import isValidEmail from '../services/emailService.js';

export default (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email' },
      async (email, password, done) => {
        if (!isValidEmail(email)) {
          return done(null, false, { message: "Format d'e-mail invalide." });
        }

        const user = await authDataMapper.getUserByEmail(email);

        if (!user) {
          return done(null, false, { message: 'Email incorrecte.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          const userForToken = {
            id: user.id,
            email: user.email,
            firstname: user.firstname,
          };

          const token = jwt.sign(userForToken, process.env.JWT_SECRET, {
            expiresIn: '1d',
          });

          user.token = token;

          return done(null, user);
        }

        return done(null, false, {
          message: 'Email ou mot de passe incorrect',
        });
      },
    ),
  );

  // ! To take cookie in the web page work in http but not in the front
  const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies.jwt;
    }
    return token;
  };

  const opts = {};
  opts.jwtFromRequest = cookieExtractor;
  opts.secretOrKey = process.env.JWT_SECRET;
  debug('opts', opts);
  passport.use(
    new JwtStrategy(opts, async (jwtPayload, done) => {
      try {
        debug('jwtPayload', jwtPayload);
        const user = await authDataMapper.getUserById(jwtPayload.id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    }),
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await authDataMapper.getUserById(id);
    done(null, user);
  });
};
