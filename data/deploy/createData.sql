-- Deploy migration:createData to pg

BEGIN;

-- Seeder for admin-user table
INSERT INTO admin_user (firstname, lastname, email, password, role) VALUES
('john', 'doe', 'john.doe@example.com', 'Test123456!', 'student'),
('jane', 'smith', 'jane.smith@example.com', 'Test123456!', 'staff'),
('admin', 'user', 'admin@example.com', 'Test123456!', 'admin');

-- Seeder for Equipment table
INSERT INTO equipment (name, description, category) VALUES
('HP EliteBook 840', 'Ordinateur portable pour le développement et la bureautique', 'Ordinateurs portables'),
('Dell XPS 13', 'Ordinateur portable léger et puissant', 'Ordinateurs portables'),
('BenQ MW632ST', 'Projecteur courte focale 3D', 'Projecteurs'),
('Epson PowerLite X39', 'Projecteur haute luminosité', 'Projecteurs'),
('HP LaserJet Pro MFP M428fdw', 'Imprimante multifonction laser noir et blanc', 'Imprimantes'),
('Canon PIXMA G6020', 'Imprimante à jet d\''encre tout-en-un', 'Imprimantes'),
('Epson FastFoto FF-680W', 'Scanner haute vitesse pour documents et photos', 'Scanner'),
('HP ScanJet Pro 2500 f1', 'Scanner professionnel pour documents et photos', 'Scanner'),
('Dell Precision 5820', 'Station de travail fixe hautes performances', 'Stations de travail fixes'),
('Lenovo ThinkStation P330', 'Station de travail fixe compacte et puissante', 'Stations de travail fixes'),
('Dell PowerEdge R740', 'Serveur rackable haute performance', 'Serveurs'),
('HP ProLiant DL380 Gen10', 'Serveur rackable haute disponibilité', 'Serveurs'),
('WD My Passport 2TB', 'Disque dur externe 2TB USB 3.0', 'Périphériques de stockage (disques durs externes, clés USB)'),
('SanDisk Ultra USB 128GB', 'Clé USB 128GB haute vitesse', 'Périphériques de stockage (disques durs externes, clés USB)'),
('Cable HDMI 2.0', 'Câble HDMI haute vitesse pour vidéo 4K', 'Câbles et adaptateurs'),
('Adaptateur USB-C vers HDMI', 'Adaptateur pour connecter des appareils USB-C à HDMI', 'Câbles et adaptateurs'),
('Logitech C920 HD', 'Webcam HD 1080p avec autofocus', 'Caméras / Webcams'),
('Microsoft LifeCam Studio', 'Webcam HD 1080p avec micro intégré', 'Caméras / Webcams'),
('Anker PowerCore 20100', 'Batterie portable haute capacité 20100mAh', 'Batteries portables / Chargeurs'),
('RAVPower 26800mAh', 'Batterie portable avec charge rapide', 'Batteries portables / Chargeurs');
INSERT INTO equipment (name, description, category) VALUES
('HP EliteBook 840', 'Ordinateur portable pour le développement et la bureautique', 'Ordinateurs portables'),
('Dell XPS 13', 'Ordinateur portable léger et puissant', 'Ordinateurs portables'),
('BenQ MW632ST', 'Projecteur courte focale 3D', 'Projecteurs'),
('Epson PowerLite X39', 'Projecteur haute luminosité', 'Projecteurs'),
('HP LaserJet Pro MFP M428fdw', 'Imprimante multifonction laser noir et blanc', 'Imprimantes'),
('Canon PIXMA G6020', 'Imprimante à jet d\''encre tout-en-un', 'Imprimantes'),
('Epson FastFoto FF-680W', 'Scanner haute vitesse pour documents et photos', 'Scanner'),
('HP ScanJet Pro 2500 f1', 'Scanner professionnel pour documents et photos', 'Scanner'),
('Dell Precision 5820', 'Station de travail fixe hautes performances', 'Stations de travail fixes'),
('Lenovo ThinkStation P330', 'Station de travail fixe compacte et puissante', 'Stations de travail fixes'),
('Dell PowerEdge R740', 'Serveur rackable haute performance', 'Serveurs'),
('HP ProLiant DL380 Gen10', 'Serveur rackable haute disponibilité', 'Serveurs'),
('WD My Passport 2TB', 'Disque dur externe 2TB USB 3.0', 'Périphériques de stockage (disques durs externes, clés USB)'),
('SanDisk Ultra USB 128GB', 'Clé USB 128GB haute vitesse', 'Périphériques de stockage (disques durs externes, clés USB)'),
('Cable HDMI 2.0', 'Câble HDMI haute vitesse pour vidéo 4K', 'Câbles et adaptateurs'),
('Adaptateur USB-C vers HDMI', 'Adaptateur pour connecter des appareils USB-C à HDMI', 'Câbles et adaptateurs'),
('Logitech C920 HD', 'Webcam HD 1080p avec autofocus', 'Caméras / Webcams'),
('Microsoft LifeCam Studio', 'Webcam HD 1080p avec micro intégré', 'Caméras / Webcams'),
('Anker PowerCore 20100', 'Batterie portable haute capacité 20100mAh', 'Batteries portables / Chargeurs'),
('RAVPower 26800mAh', 'Batterie portable avec charge rapide', 'Batteries portables / Chargeurs'),
('MSI 2048 INT', 'Ordinateur portable pour Gaming', 'Ordinateurs portables'),
('Mac 01903', 'Ordinateur portable gros et TRÈS puissant', 'Ordinateurs portables'),
('LEO OCEJOLI', 'Projecteur HD', 'Projecteurs'),
('MON KIDILUFY', 'Projecteur 4K', 'Projecteurs'),
('HP R740 FKOOP', 'Imprimante multifonction toute couleur', 'Imprimantes'),
('HP AIR & LIEGEUR', 'Imprimante tout support', 'Imprimantes'),
('HP KIZ ARU', 'Scanner très grande vitesse pour documents et photos', 'Scanner'),
('HP BA GY', 'Scanner de grande entreprises', 'Scanner'),
('MSI RAW POWER ', 'Station de travail fixe puissante', 'Stations de travail fixes'),
('INT PRO X9', 'Station de travail fixe haute performance', 'Stations de travail fixes'),
('MC PRO MAX BOOST', 'Serveur rackable TRÈS haute performance', 'Serveurs'),
('HP ProLight', 'Serveur rackable grande capacité', 'Serveurs'),
('SO NGAUKOU', 'Disque dur externe 256GB 2.0', 'Périphériques de stockage (disques durs externes, clés USB)'),
('SanDisk BOKU2PLACE', 'Clé USB 3To nasa vitesse', 'Périphériques de stockage (disques durs externes, clés USB)'),
('Cable USB-C 4.0', 'Câble USB-C haute charge', 'Câbles et adaptateurs'),
('Cable HDMI vers HDMI', 'Adaptateur pour connecter des appareils HDMI à HDMI', 'Câbles et adaptateurs'),
('Logitech MHA HD', 'Webcam HD 1080p sans flou de mouvement ', 'Caméras / Webcams'),
('Logitech 360p', 'Webcam 360p de luxe', 'Caméras / Webcams'),
('BOOST CHARGE', 'Batterie portable haute capacitée', 'Batteries portables / Chargeurs'),
('RAWPower 30600mAh', 'Batterie portable avec charge améliorée', 'Batteries portables / Chargeurs');


-- Seeder for Reservations table
INSERT INTO Reservations (user_id, equipment_id, reservation_date, return_date, status) VALUES
(1, 1, '2024-09-25', '2024-09-28', 'reserved'),
(1, 2, '2024-09-26', '2024-09-29', 'reserved'),
(2, 3, '2024-09-20', '2024-09-24', 'reserved'),
(2, 5, '2024-09-21', '2024-09-25', 'reserved'),
(3, 6, '2024-09-22', '2024-09-26', 'reserved'),
(3, 8, '2024-09-23', '2024-09-27', 'reserved'),
(1, 10, '2024-09-24', '2024-09-28', 'reserved'),
(1, 12, '2024-09-25', '2024-09-29', 'reserved'),
(2, 14, '2024-09-26', '2024-09-30', 'reserved'),
(2, 16, '2024-09-27', '2024-10-01', 'reserved'),
(3, 18, '2024-09-28', '2024-10-02', 'reserved'),
(3, 20, '2024-09-29', '2024-10-03', 'reserved'),
(1, 4, '2024-09-25', NULL, 'reserved'),
(2, 4, '2024-09-26', NULL, 'reserved'),
(1, 2, '2024-09-26', '2024-09-29', 'reserved'),
(2, 3, '2024-09-20', '2024-09-24', 'reserved'),
(2, 5, '2024-09-21', '2024-09-25', 'reserved'),
(3, 6, '2024-09-22', '2024-09-26', 'reserved'),
(3, 8, '2024-09-23', '2024-09-27', 'reserved'),
(1, 10, '2024-09-24', '2024-09-28', 'reserved'),
(1, 12, '2024-09-25', '2024-09-29', 'reserved'),
(2, 14, '2024-09-26', '2024-09-30', 'reserved'),
(2, 16, '2024-09-27', '2024-10-01', 'reserved'),
(3, 18, '2024-09-28', '2024-10-02', 'reserved'),
(3, 20, '2024-09-29', '2024-10-03', 'reserved'),
(1, 4, '2024-09-25', NULL, 'reserved'),
(1, 7, '2024-09-20', '2024-09-24', 'returned')
(1, 2, '2024-09-26', '2024-09-29', 'reserved'),
(2, 3, '2024-09-20', '2024-09-24', 'reserved'),
(2, 5, '2024-09-21', '2024-09-25', 'reserved'),
(3, 6, '2024-09-22', '2024-09-26', 'reserved'),
(3, 8, '2024-09-23', '2024-09-27', 'reserved'),
(1, 10, '2024-09-24', '2024-09-28', 'reserved'),
(1, 12, '2024-09-25', '2024-09-29', 'reserved'),
(2, 14, '2024-09-26', '2024-09-30', 'reserved'),
(2, 16, '2024-09-27', '2024-10-01', 'reserved'),
(3, 18, '2024-09-28', '2024-10-02', 'reserved'),
(3, 20, '2024-09-29', '2024-10-03', 'reserved'),
(1, 4, '2024-09-25', NULL, 'reserved'),;

-- Seeder for ReservationHistory table
INSERT INTO ReservationHistory (reservation_id, action, action_date) VALUES
(1, 'reserved', '2024-09-25 10:00:00'),
(1, 'returned', '2024-09-28 12:00:00'),
(2, 'reserved', '2024-09-26 09:30:00'),
(3, 'reserved', '2024-09-20 08:00:00'),
(3, 'returned', '2024-09-24 14:00:00');


COMMIT;
