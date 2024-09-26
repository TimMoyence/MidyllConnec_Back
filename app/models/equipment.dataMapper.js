import Debug from 'debug';
import client from './client.js';
import CoreDataMapper from './index.dataMapper.js';

const debug = Debug('louison:models:dataMapper:benefit');

export default class EquipmentDataMapper extends CoreDataMapper {
  static tableName = 'equipment';
  
  async getByCategory(category){
    const preparedQuery = {
      text: `SELECT * FROM 
          Equipment e
      LEFT JOIN LATERAL (
          SELECT 
              status,
              reservation_date,
              return_date
          FROM 
              Reservations r
          WHERE 
              r.equipment_id = e.equipment_id
          ORDER BY 
              r.reservation_date DESC
          LIMIT 1
      ) r ON TRUE
      WHERE 
          e.category = $1; -- Replace $1 with the desired category parameter
      `,
      values: [category],
    };
    const result = await client.query(preparedQuery);
    console.log(result.row)
      return result.rows;
  }
}