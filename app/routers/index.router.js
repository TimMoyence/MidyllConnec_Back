import Debug from 'debug';
import { Router } from 'express';
import NotFoundError from '../errors/notfound.error.js';
import logger from '../helpers/logger.js';
import errorHandler from '../middlewares/error.middleware.js';
import validation from '../middlewares/validation.middleware.js';
import * as schemaPost from '../schemas/app.post.schema.js';
import adminRouter from './admin.router.js';
import authRouter from './auth.router.js';

const debug = Debug('mydillConnect:router:index');

/**
 * @typedef {object} ResponseError response error
 * @property {string} error the error string
 */

const router = Router();

router.use((req, _, next) => {
  logger.http(req.url, {
    method: req.method,
    ip: req.ip,
    os: req.headers['user-agent'],
  });
  next();
});

router.post(
  '/api/visited',
  validation(schemaPost.visitPostSchema, 'body'),
);

router.use(adminRouter);
router.use(authRouter);

router.use((_, __, next) => {
  next(new NotFoundError('404 not found'));
});

router.use(errorHandler);

export default router;
