-- Revert migration:createTrigger from pg

BEGIN;


DROP TRIGGER IF EXISTS set_timestamp ON "admin_user"  CASCADE;

DROP FUNCTION  IF EXISTS  trigger_set_timestamp()  CASCADE;

COMMIT;
