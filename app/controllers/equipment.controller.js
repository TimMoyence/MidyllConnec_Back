import Debug from 'debug';
import Equipment from '../models/equipment.dataMapper.js'; // Importation de votre data mapper
import CoreController from './index.controller.js';

const debug = Debug('louison:controller:equipment');
const EquipmentDataMapper = new Equipment()

export default class EquipmentController extends CoreController {
  static dataMapper = EquipmentDataMapper

    constructor(){
      super();
      debug('equipmentDataMapper constructor');
    }

  async getEquipmentByCategory(req, res) {
    const category = req.params.category;
    const equipments = await EquipmentDataMapper.getByCategory(category); 
    
    if (equipments.length > 0) {
      res.status(200).json(equipments); 
    } else {
      res.status(404).json({ message: 'No equipment found in this category' }); 
    }
  }
}
