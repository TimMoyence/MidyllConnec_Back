import client from './client.js';

export default class ReservationDataMapper {
  static tableName = 'Reservations';

  // Method to create a reservation
  static async createReservation({ user_id, equipment_id, reservation_date, equipment_state }) {
    const query = {
      text: `
        INSERT INTO Reservations (user_id, equipment_id, reservation_date, equipment_state_at_reservation, status)
        VALUES ($1, $2, $3, $4, 'reserved') RETURNING *`,
      values: [user_id, equipment_id, reservation_date, equipment_state],
    };

    const result = await client.query(query);
    return result.rows[0];
  }

  // Method to update a reservation
  static async updateReservation({ reservation_id, status, equipment_state }) {
    const query = {
      text: `
        UPDATE Reservations 
        SET status = $1, equipment_state_at_return = $2, return_date = CURRENT_DATE
        WHERE reservation_id = $3 RETURNING *`,
      values: [status, equipment_state, reservation_id],
    };

    const result = await client.query(query);
    return result.rows[0];
  }
}
