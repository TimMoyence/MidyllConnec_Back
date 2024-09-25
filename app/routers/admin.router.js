import Debug from 'debug';
import { Router } from 'express';
import passport from 'passport';

const debug = Debug('mydillConnect:router:admin');
/**
 * @typedef {object} ResponseError response error
 * @property {string} error the error string
 */

const adminRouter = Router();

adminRouter.post(
  '/api/admin/isAuthenticated',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    debug('isAuthenticated');
    res.json({ authenticated: true, message: 'Authenticated' });
  },
);

adminRouter.get(
  '/api/isAuthenticated',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    debug('isAuthenticated');
    res.json({ authenticated: true, message: 'Authenticated' });
  },
);

adminRouter.get(
  '/api/admin/graph',
  passport.authenticate('jwt', { session: false }),
);

adminRouter.get(
  '/api/admin/logout',
  passport.authenticate('jwt', { session: false }),
  (_, res) => {
    res
      .clearCookie('jwt', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/admin',
      })
      .status(204)
      .json('Unlog Ok');
  },
);
/**
 * GET /api/logout
 * @summary disconnect an user
 * @tags Auth
 */
export default adminRouter;
