import Debug from 'debug';
import Benefit from '../models/benefit.dataMapper.js';
import CoreController from './index.controller.js';

const debug = Debug('louison:controller:benefit');

const BenefitDataMapper = new Benefit();

export default class BenefitController extends CoreController {
  static dataMapper = BenefitDataMapper;

  static data1 = 'massage_id';

  static data2 = 'benefit_id';

  static data3 = 'huile_id';

  constructor() {
    super();
    debug('benefitController constructor');
  }
}
