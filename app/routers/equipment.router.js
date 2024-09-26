import Debug from 'debug';
import { Router } from 'express';
import EquipmentController from '../controllers/equipment.controller.js';
import controllerWrapper from '../middlewares/controller.wrapper.js';
import validation from '../middlewares/validation.middleware.js';
import schemaGet from '../schemas/app.get.schema.js';


const debug = Debug('mydillConnect:router:equipment');
/**
 * @typedef {object} ResponseError response error
 * @property {string} error the error string
 */

const equipmentRouter = Router();
const equipmentController = new EquipmentController();


equipmentRouter.get(
  '/api/equipment',
  controllerWrapper(equipmentController.getAll.bind(equipmentController)),
);

equipmentRouter.get(
  '/api/equipment/:id',
  validation(schemaGet, 'query'),
  controllerWrapper(equipmentController.getById.bind(equipmentController)),
);


// TODO : tu fait la meme chose que au dessus sans la validation 
equipmentRouter.get(
    '/api/equipment/category/:category',
    controllerWrapper(equipmentController.getEquipmentByCategory.bind(equipmentController)),
);


export default equipmentRouter;