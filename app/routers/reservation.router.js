import { Router } from 'express';
import ReservationController from '../controllers/reservation.controller.js';
import controllerWrapper from '../middlewares/controller.wrapper.js';

const reservationRouter = Router();
const reservationController = new ReservationController();

// Route to create a reservation
reservationRouter.post(
  '/reservation/:equipment_id',
  controllerWrapper(reservationController.createReservation.bind(reservationController))
);

// Route to update a reservation (return or cancel)
reservationRouter.put(
  '/reservation/:reservation_id',
  controllerWrapper(reservationController.updateReservation.bind(reservationController))
);

export default reservationRouter;
