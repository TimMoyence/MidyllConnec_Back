-- Deploy migration:createTable to pg

BEGIN;

-- table admin_user 
CREATE TABLE admin_user (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- Table pour les équipements disponibles à la réservation
CREATE TABLE Equipment (
    equipment_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    category ENUM('Ordinateurs portables', 'Projecteurs', 'Imprimantes', 'Scanner', 'Stations de travail fixes', 'Serveurs', 'Périphériques de stockage (disques durs externes, clés USB)',  'Câbles et adaptateurs', 'Caméras / Webcams',  'Batteries portables / Chargeurs') NOT NULL,
    availability BOOLEAN DEFAULT TRUE
);


-- Table des réservations effectuées par les utilisateurs
CREATE TABLE Reservations (
    reservation_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    equipment_id INT NOT NULL,
    reservation_date DATE NOT NULL,
    return_date DATE,
    status ENUM('reserved', 'returned', 'canceled') DEFAULT 'reserved',
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (equipment_id) REFERENCES Equipment(equipment_id)
);

-- Table pour gérer l'historique des réservations
CREATE TABLE ReservationHistory (
    history_id INT PRIMARY KEY AUTO_INCREMENT,
    reservation_id INT NOT NULL,
    action ENUM('reserved', 'returned', 'canceled'),
    action_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (reservation_id) REFERENCES Reservations(reservation_id)
);

CREATE TABLE IF NOT EXISTS "session" (
    "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

COMMIT;
