-- Verify migration:createTrigger on pg

BEGIN;

SELECT proname
FROM pg_proc
WHERE proname = 'trigger_set_timestamp';

SELECT tgname
FROM pg_trigger
WHERE tgname = 'set_timestamp' AND tgrelid = 'admin_user'::regclass;

ROLLBACK;
