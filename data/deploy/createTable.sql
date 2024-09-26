BEGIN;

-- Table admin_user 
CREATE TABLE admin_user (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'user',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ
);

-- Table pour les équipements disponibles à la réservation
CREATE TABLE Equipment (
    equipment_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    state TEXT NOT NULL DEFAULT 'Neuf' CHECK (state IN ('Neuf', 'Usée', 'cassés')),
    category TEXT NOT NULL CHECK (category IN ('Ordinateurs portables', 'Projecteurs', 'Imprimantes', 'Scanner', 'Stations de travail fixes', 'Serveurs', 'Périphériques de stockage', 'Câbles et adaptateurs', 'Caméras - Webcams', 'Batteries portables - Chargeurs'))
);

-- Table des réservations effectuées par les utilisateurs
CREATE TABLE Reservations (
    reservation_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    equipment_id INT NOT NULL,
    reservation_date DATE NOT NULL,
    return_date DATE,
    status TEXT DEFAULT 'reserved' CHECK (status IN ('reserved', 'returned', 'canceled')),
    equipment_state_at_reservation TEXT, -- New column for equipment state at reservation
    equipment_state_at_return TEXT,      -- New column for equipment state at return
    FOREIGN KEY (user_id) REFERENCES admin_user(id),
    FOREIGN KEY (equipment_id) REFERENCES Equipment(equipment_id)
);


-- Table pour gérer l'historique des réservations
CREATE TABLE ReservationHistory (
    history_id SERIAL PRIMARY KEY,
    reservation_id INT NOT NULL,
    action TEXT CHECK (action IN ('reserved', 'returned', 'canceled')),
    action_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    equipment_state TEXT, -- New column for equipment state at the moment of the action
    FOREIGN KEY (reservation_id) REFERENCES Reservations(reservation_id)
);


CREATE TABLE IF NOT EXISTS "session" (
    "sid" VARCHAR NOT NULL COLLATE "default",
    "sess" JSON NOT NULL,
    "expire" TIMESTAMPTZ NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

COMMIT;
