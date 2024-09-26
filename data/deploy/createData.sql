-- Deploy migration:createData to pg

BEGIN;

-- Seeder for admin-user table
INSERT INTO admin_user (firstname, lastname, email, password, role) VALUES
('john', 'doe', 'john.doe@example.com', 'Test123456!', 'student'),
('jane', 'smith', 'jane.smith@example.com', 'Test123456!', 'staff'),
('admin', 'user', 'admin@example.com', 'Test123456!', 'admin');

-- Seeder for Equipment table
INSERT INTO equipment (name, description, category, availability) VALUES
('HP EliteBook 840', 'Ordinateur portable pour le développement et la bureautique', 'Ordinateurs portables', TRUE),
('Dell XPS 13', 'Ordinateur portable léger et puissant', 'Ordinateurs portables', TRUE),
('BenQ MW632ST', 'Projecteur courte focale 3D', 'Projecteurs', TRUE),
('Epson PowerLite X39', 'Projecteur haute luminosité', 'Projecteurs', TRUE),
('HP LaserJet Pro MFP M428fdw', 'Imprimante multifonction laser noir et blanc', 'Imprimantes', TRUE),
('Canon PIXMA G6020', 'Imprimante à jet d\''encre tout-en-un', 'Imprimantes', TRUE),
('Epson FastFoto FF-680W', 'Scanner haute vitesse pour documents et photos', 'Scanner', TRUE),
('HP ScanJet Pro 2500 f1', 'Scanner professionnel pour documents et photos', 'Scanner', TRUE),
('Dell Precision 5820', 'Station de travail fixe hautes performances', 'Stations de travail fixes', TRUE),
('Lenovo ThinkStation P330', 'Station de travail fixe compacte et puissante', 'Stations de travail fixes', TRUE),
('Dell PowerEdge R740', 'Serveur rackable haute performance', 'Serveurs', TRUE),
('HP ProLiant DL380 Gen10', 'Serveur rackable haute disponibilité', 'Serveurs', TRUE),
('WD My Passport 2TB', 'Disque dur externe 2TB USB 3.0', 'Périphériques de stockage (disques durs externes, clés USB)', TRUE),
('SanDisk Ultra USB 128GB', 'Clé USB 128GB haute vitesse', 'Périphériques de stockage (disques durs externes, clés USB)', TRUE),
('Cable HDMI 2.0', 'Câble HDMI haute vitesse pour vidéo 4K', 'Câbles et adaptateurs', TRUE),
('Adaptateur USB-C vers HDMI', 'Adaptateur pour connecter des appareils USB-C à HDMI', 'Câbles et adaptateurs', TRUE),
('Logitech C920 HD', 'Webcam HD 1080p avec autofocus', 'Caméras / Webcams', TRUE),
('Microsoft LifeCam Studio', 'Webcam HD 1080p avec micro intégré', 'Caméras / Webcams', TRUE),
('Anker PowerCore 20100', 'Batterie portable haute capacité 20100mAh', 'Batteries portables / Chargeurs', TRUE),
('RAVPower 26800mAh', 'Batterie portable avec charge rapide', 'Batteries portables / Chargeurs', TRUE);

-- Seeder for Reservations table
INSERT INTO Reservations (user_id, equipment_id, reservation_date, return_date, status) VALUES
(1, 1, '2024-09-25', '2024-09-28', 'reserved'),
(2, 4, '2024-09-26', NULL, 'reserved'),
(1, 7, '2024-09-20', '2024-09-24', 'returned');

-- Seeder for ReservationHistory table
INSERT INTO ReservationHistory (reservation_id, action, action_date) VALUES
(1, 'reserved', '2024-09-25 10:00:00'),
(1, 'returned', '2024-09-28 12:00:00'),
(2, 'reserved', '2024-09-26 09:30:00'),
(3, 'reserved', '2024-09-20 08:00:00'),
(3, 'returned', '2024-09-24 14:00:00');


COMMIT;
