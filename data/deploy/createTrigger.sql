-- Deploy migration:createTrigger to pg

BEGIN;

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "admin_user"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();


COMMIT;
