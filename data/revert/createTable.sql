-- Revert migration:createTable from pg

BEGIN;

DROP TABLE IF EXISTS "session" CASCADE;
DROP TABLE IF EXISTS admin_user CASCADE;
DROP TABLE IF EXISTS admin_user CASCADE ;
DROP TABLE IF EXISTS Equipment CASCADE ;
DROP TABLE IF EXISTS Reservations CASCADE ;
DROP TABLE IF EXISTS ReservationHistory CASCADE ;

COMMIT;
