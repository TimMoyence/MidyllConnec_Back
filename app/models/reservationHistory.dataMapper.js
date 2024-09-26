import client from './client.js';

export default class ReservationHistoryDataMapper {
  static tableName = 'ReservationHistory';

  // Method to add history for a reservation
  static async addHistory({ reservation_id, action, equipment_state }) {
    const query = {
      text: `
        INSERT INTO ReservationHistory (reservation_id, action, equipment_state)
        VALUES ($1, $2, $3)`,
      values: [reservation_id, action, equipment_state],
    };

    await client.query(query);
  }
}
