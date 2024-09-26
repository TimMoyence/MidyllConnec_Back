import ReservationDataMapper from '../models/reservation.dataMapper.js';
import ReservationHistoryDataMapper from '../models/reservationHistory.dataMapper.js';

export default class ReservationController {
  // Method to create a reservation
  async createReservation(req, res) {
    const { user_id, reservation_date, equipment_state } = req.body;
    const { equipment_id } = req.params;

    try {
      // Create the reservation via the data mapper
      const reservation = await ReservationDataMapper.createReservation({
        user_id,
        equipment_id,
        reservation_date,
        equipment_state,
      });

      // Add to reservation history
      await ReservationHistoryDataMapper.addHistory({
        reservation_id: reservation.reservation_id,
        action: 'reserved',
        equipment_state,
      });

      res.status(201).json({ message: 'Reservation created', reservation });
    } catch (error) {
      console.error('Error creating reservation:', error);
      res.status(500).json({ error: 'Error creating reservation' });
    }
  }

  // Method to update a reservation (return or cancel)
  async updateReservation(req, res) {
    const { reservation_id } = req.params;
    const { status, equipment_state } = req.body;

    try {
      // Update the reservation via the data mapper
      const reservation = await ReservationDataMapper.updateReservation({
        reservation_id,
        status,
        equipment_state,
      });

      // Add to reservation history
      await ReservationHistoryDataMapper.addHistory({
        reservation_id,
        action: status,
        equipment_state,
      });

      res.status(200).json({ message: 'Reservation updated', reservation });
    } catch (error) {
      console.error('Error updating reservation:', error);
      res.status(500).json({ error: 'Error updating reservation' });
    }
  }
}
