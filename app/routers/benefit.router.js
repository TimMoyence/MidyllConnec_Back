import Debug from 'debug';
import { Router } from 'express';
import BenefitController from '../controllers/benefit.controller.js';
import controllerWrapper from '../middlewares/controller.wrapper.js';
import validation from '../middlewares/validation.middleware.js';
import schemaGet from '../schemas/app.get.schema.js';
import * as schemaPost from '../schemas/app.post.schema.js';

const debug = Debug('louison:router:benefit');
/**
 * @typedef {object} ResponseError response error
 * @property {string} error the error string
 */

const benefitRouter = Router();
const benefitController = new BenefitController();

benefitRouter.get(
  '/api/bienfaits',
  controllerWrapper(benefitController.getAll.bind(benefitController)),
);

benefitRouter.get(
  '/api/bienfait/:id',
  validation(schemaGet, 'query'),
  controllerWrapper(benefitController.getById.bind(benefitController)),
);

// ! implémenter un middlare de verification si la personne est un admin
benefitRouter.post(
  '/api/bienfait/massage',
  validation(schemaPost.bienfaitLiaisonPostSchema, 'body'),
  controllerWrapper(benefitController.createLiaisonTable.bind(benefitController)),
);

benefitRouter.post(
  '/api/bienfait',
  validation(schemaPost.bienfaitPostSchema, 'body'),
  controllerWrapper(benefitController.create.bind(benefitController)),
);

benefitRouter.patch(
  '/api/bienfait/:id',
  validation(schemaPost.bienfaitPostSchema, 'body'),
  controllerWrapper(benefitController.update.bind(benefitController)),
);

benefitRouter.delete(
  '/api/bienfait/:id',
  controllerWrapper(benefitController.delete.bind(benefitController)),
);

export default benefitRouter;
