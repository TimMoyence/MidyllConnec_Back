import Debug from 'debug';
import client from './client.js';
import CoreDataMapper from './index.dataMapper.js';

const debug = Debug('louison:models:dataMapper:benefit');

export default class EquipmentDataMapper extends CoreDataMapper {
  static tableName = 'equipment';
  
  async getByCategory(category){
    const preparedQuery = {
      text: `SELECT * FROM equipment WHERE category = $1`,
      values: [category],
    };
    const result = await client.query(preparedQuery);
    console.log(result.row)
      return result.rows;
  }
}