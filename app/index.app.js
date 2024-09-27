import connectPgSimple from 'connect-pg-simple';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import Debug from 'debug';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import passportConfig from './middlewares/passportConfig.js';
import userDocImplementation from './middlewares/swagger.doc.js';
import dbClient from './models/client.js';
import router from './routers/index.router.js';

const debug = Debug('mydillConnect:index:app');

const app = express();

app.use(cookieParser());

const corsOriginString = "http://localhost:4200,http://localhost:4000,http://mydil.rph.red,https://tmoyence.fr,http://tmoyence.fr"
const allowedOrigins = corsOriginString.split(',');

const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  const origin = req.header('Origin');

  if (allowedOrigins.includes(origin)) {
    corsOptions = {
      origin: true, // Reflect (enable) the requested origin in the CORS response
      credentials: true, // Allow credentials
    };
  } else {
    corsOptions = {
      origin: false, // Disable CORS for this request
    };
  }

  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

app.options('*', cors(corsOptionsDelegate));

passportConfig(passport);

userDocImplementation(app);
app.use('/static', express.static('uploads'));

app.use((req, res, next) => {
    return express.json()(req, res, next);
});

app.use(express.urlencoded({ extended: true }));
const PgSession = connectPgSimple(session);

// Session
app.use(
  session({
    store: new PgSession({
      pool: dbClient.originalClient, // Utilisation du pool importé de client.js
      tableName: 'session', // Nom de la table pour les sessions
    }),
    secret: 'votre_secret_de_session',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // Durée de vie du cookie
  }),
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(router);

export default app;
