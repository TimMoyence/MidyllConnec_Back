-- Revert migration:createTable from pg

BEGIN;


DROP TABLE IF EXISTS "session" CASCADE;
DROP TABLE IF EXISTS admin_user CASCADE;

COMMIT;
