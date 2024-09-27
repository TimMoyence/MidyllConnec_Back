## README - Backend

# Mydill Connect Backend

## Table des Matières

- [Mydill Connect Backend](#mydill-connect-backend)
  - [Table des Matières](#table-des-matières)
  - [Introduction](#introduction)
  - [Fonctionnalités](#fonctionnalités)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
    - [Cloner le Dépôt](#cloner-le-dépôt)
    - [Installer les Dépendances](#installer-les-dépendances)
  - [Configuration](#configuration)
    - [Variables d'Environnement](#variables-denvironnement)
    - [Configuration de la Base de Données](#configuration-de-la-base-de-données)
  - [Dépendances](#dépendances)
  - [Scripts Utiles](#scripts-utiles)
    - [Scripts Utiles Backend](#scripts-utiles-backend)
  - [Usage](#usage)
    - [Démarrer le Serveur de Développement](#démarrer-le-serveur-de-développement)
    - [Démarrer le Serveur en Production](#démarrer-le-serveur-en-production)
  - [Tests](#tests)
    - [Tests Backend](#tests-backend)
  - [Déploiement](#déploiement)
    - [Environnement de Production](#environnement-de-production)
    - [CI/CD](#cicd)
  - [Contribution](#contribution)
  - [Licence](#licence)
  - [Remerciements](#remerciements)

---

## Introduction

**Mydill Connect Backend** est le serveur applicatif de l'application Mydill Connect, conçu pour gérer la logique métier, les interactions avec la base de données, l'authentification des utilisateurs et l'exposition des API RESTful pour le frontend. Développé avec Node.js et Express.js, il utilise diverses bibliothèques pour assurer la sécurité, la performance et la maintenabilité de l'application.

---

## Fonctionnalités

- **Gestion des Réservations** : Création, mise à jour et suppression des réservations d'objets.
- **Gestion des Utilisateurs** : Inscription, connexion, gestion des profils et rôles.
- **Authentification et Autorisation** : Sécurisation des endpoints avec JWT et Passport.js.
- **Validation des Données** : Utilisation de Joi pour valider les données entrantes.
- **Téléchargement de Fichiers** : Gestion des uploads avec Multer.
- **Notifications par Email** : Envoi d'emails via Nodemailer.
- **Documentation API** : Génération automatique de la documentation Swagger.
- **Journalisation** : Suivi des événements et erreurs avec Winston.
- **Tests Unitaires** : Assurance qualité avec Jest.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- **Node.js** (version 18.x ou supérieure) : [Télécharger Node.js](https://nodejs.org/)
- **npm** (inclus avec Node.js) ou **yarn** : [Installer npm](https://www.npmjs.com/get-npm)
- **PostgreSQL** (version 12.x ou supérieure) : [Télécharger PostgreSQL](https://www.postgresql.org/download/)
- **Git** : [Installer Git](https://git-scm.com/downloads)
- **Un éditeur de code** (ex. Visual Studio Code) : [Télécharger VS Code](https://code.visualstudio.com/)

---

## Installation

### Cloner le Dépôt

Clonez le dépôt GitHub sur votre machine locale :

```bash
git clone https://github.com/TimMoyence/MidyllConnec_Back
cd mydill-connect/backend
```

### Installer les Dépendances

Installez les dépendances nécessaires :

```bash
npm install
```
---

## Configuration

### Variables d'Environnement

Créez un fichier `.env` à la racine du dossier `backend` et ajoutez-y les variables d'environnement nécessaires :

```env
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/mydill_connect
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_password
SESSION_SECRET=your_session_secret
```

Assurez-vous de remplacer les valeurs par vos propres clés et informations sensibles.

### Configuration de la Base de Données

1. **Assurez-vous que PostgreSQL est installé et en cours d'exécution.**
2. **Créez une base de données nommée `mydill_connect` :**

   ```sql
   CREATE DATABASE mydill_connect;
   ```

3. **Configurez les migrations et les seeds :**

   Utilisez les scripts définis pour appliquer les migrations et remplir la base de données avec des données initiales.

---

## Dépendances

Les dépendances nécessaires pour le backend sont listées ci-dessous :

| Package                     | Version    | Description                                                                 |
|-----------------------------|------------|-----------------------------------------------------------------------------|
| `bcrypt`                    | ^5.1.1     | Bibliothèque pour le hachage des mots de passe.                            |
| `connect-pg-simple`         | ^9.0.1     | Stockage des sessions Express dans une base de données PostgreSQL.        |
| `cookie-parser`             | ^1.4.6     | Middleware pour parser les cookies dans les requêtes HTTP.                 |
| `cors`                      | ^2.8.5     | Middleware pour activer CORS (Cross-Origin Resource Sharing).              |
| `debug`                     | ^4.3.4     | Outils de débogage pour Node.js.                                           |
| `dotenv`                    | ^16.3.1    | Chargement des variables d'environnement depuis un fichier `.env`.        |
| `express`                   | ^4.18.2    | Framework web minimal et flexible pour Node.js.                            |
| `express-jsdoc-swagger`     | ^1.8.0     | Génération de documentation Swagger à partir de JSDoc.                     |
| `express-session`           | ^1.17.3    | Gestion des sessions utilisateur avec Express.                             |
| `handlebars`                | ^4.7.8     | Moteur de template pour générer des vues HTML.                             |
| `joi`                       | ^17.10.2    | Validation des schémas de données.                                         |
| `jsonwebtoken`              | ^9.0.2     | Génération et vérification des JSON Web Tokens (JWT).                       |
| `multer`                    | ^1.4.5-lts.1| Middleware pour gérer les uploads de fichiers.                              |
| `nodemailer`                | ^6.9.7     | Envoi d'e-mails depuis Node.js.                                             |
| `nodemon`                   | ^3.0.1     | Redémarrage automatique du serveur lors des modifications de code.         |
| `passport`                  | ^0.6.0     | Middleware d'authentification pour Node.js.                                |
| `passport-jwt`              | ^4.0.1     | Stratégie Passport pour l'authentification via JWT.                        |
| `passport-local`            | ^1.0.0     | Stratégie Passport pour l'authentification locale (nom d'utilisateur/mot de passe). |
| `pg`                        | ^8.11.3    | Client PostgreSQL pour Node.js.                                            |
| `puppeteer`                 | ^22.3.0    | Bibliothèque pour contrôler Chrome ou Chromium via une API haut niveau.    |
| `stripe`                    | ^14.19.0   | Intégration avec l'API Stripe pour les paiements en ligne.                |
| `swagger-jsdoc`             | ^6.2.8     | Génération de documentation Swagger à partir de JSDoc.                     |
| `swagger-ui-express`        | ^5.0.0     | Middleware pour servir l'interface Swagger UI.                             |
| `winston`                   | ^3.10.0    | Bibliothèque de journalisation pour Node.js.                               |

---

## Scripts Utiles

### Scripts Utiles Backend

Les scripts définis dans le `package.json` du backend facilitent le développement et la gestion du projet.

| Commande                     | Description                                          |
|------------------------------|------------------------------------------------------|
| `npm start`                  | Démarre le serveur en mode production.               |
| `npm run dev`                | Démarre le serveur en mode développement avec `nodemon`. |
| `npm run lint`               | Exécute ESLint pour analyser le code source.          |
| `npm test`                   | Exécute les tests unitaires avec Jest.               |
| `npm run migrate`            | Applique les migrations de la base de données.        |
| `npm run seed`               | Remplit la base de données avec des données de test.  |

---

## Usage

### Démarrer le Serveur de Développement

1. **Naviguez dans le dossier `backend` :**

   ```bash
   cd backend
   ```

2. **Démarrez le serveur en mode développement :**

   ```bash
   npm run dev
   ```

3. **Le serveur backend sera accessible sur :**

   ```
   http://localhost:3000
   ```

### Démarrer le Serveur en Production

1. **Naviguez dans le dossier `backend` :**

   ```bash
   cd backend
   ```

2. **Démarrez le serveur en mode production :**

   ```bash
   npm start
   ```

3. **Le serveur backend sera accessible sur :**

   ```
   http://localhost:3000
   ```

---

## Tests

### Tests Backend

1. **Naviguez dans le dossier `backend` :**

   ```bash
   cd backend
   ```

2. **Exécutez les tests :**

   ```bash
   npm test
   ```

   Les tests sont écrits avec Jest.

---

## Déploiement

### Environnement de Production

1. **Configuration des Variables d'Environnement :**

   Assurez-vous que toutes les variables d'environnement nécessaires sont définies dans l'environnement de production.

2. **Build Frontend (si applicable) :**

   Si le frontend nécessite une compilation ou un build spécifique, assurez-vous de le faire avant le déploiement.

   ```bash
   cd frontend
   npm run build
   ```

3. **Déploiement Backend :**

   Déployez le backend sur un serveur ou une plateforme de cloud (ex. Heroku, AWS, DigitalOcean).

4. **Configuration du Serveur :**

   Utilisez des outils comme **PM2** pour gérer le processus Node.js en production.

   ```bash
   npm install -g pm2
   pm2 start server.js
   ```

### CI/CD

1. **Intégration Continue :**

   Configurez un pipeline d'intégration continue (ex. GitHub Actions, GitLab CI) pour automatiser les tests et les builds à chaque push.

2. **Déploiement Continu :**

   Configurez le pipeline pour déployer automatiquement en production ou en staging après des builds réussis.

---

## Contribution

Les contributions sont les bienvenues ! Pour contribuer à ce projet, veuillez suivre les étapes ci-dessous :

1. **Fork** le dépôt.
2. **Créez une branche** pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalité`).
3. **Commitez vos changements** (`git commit -m 'Ajout de ma fonctionnalité'`).
4. **Poussez** vers la branche (`git push origin feature/ma-fonctionnalité`).
5. **Ouvrez une Pull Request**.

Veuillez vous assurer que votre code respecte les conventions de style définies et que tous les tests passent.

---

## Licence

Ce projet est sous licence [MIT](LICENSE).

---

## Remerciements

- Merci à l'équipe de l'EPSI pour leur soutien et leur collaboration.
- Inspirations et ressources provenant de divers projets open-source.