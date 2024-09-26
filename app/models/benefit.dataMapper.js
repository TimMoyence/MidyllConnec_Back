import Debug from 'debug';
import CoreDataMapper from './index.dataMapper.js';

const debug = Debug('louison:models:dataMapper:benefit');

export default class BenefitDataMapper extends CoreDataMapper {
  static tableName = 'benefit';

  static liaisonInsertProperty = 'massage_id, benefit_id';

  static liaisonTable = 'massage_has_benefit';

  static liaisonInsertPropertyHuile = 'huile_id, benefit_id';

  static liaisonTableHuile = 'huile_has_benefit';

  constructor() {
    super();
    debug('benefit-dataMapper constructor');
  }
}
