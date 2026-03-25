# Présentation du Projet

Ce projet consiste à orchestrer une architecture logicielle complète divisée en quatre services distincts communiquant sur un réseau Docker isolé.

## Services déployés

- **Database** : MySQL 8.0 (Port **3306**)
- **Backend** : API Node.js 16-alpine (Port **3000**)
- **Frontend** : Serveur Nginx alpine (Port **8080**)
- **Adminer** : Interface de gestion de base de données (Port **8081**)

## Étapes de Réalisation

### 1. Initialisation de l'environnement

Le projet est structuré avec des dossiers séparés pour le backend, le frontend et la configuration Nginx.  
Le fichier `docker-compose.yml` à la racine sert de chef d’orchestre.

**Capture d’écran 1** : Structure des dossiers dans l’explorateur ou le terminal (`ls -R`).

### 2. Configuration du Docker Compose

Le fichier `docker-compose.yml` définit les réseaux et les volumes afin d’assurer la persistance des données MySQL.

```yaml
# Extrait de la configuration Adminer
adminer:
  image: adminer
  ports:
    - "8081:8080"
```

### 3. Lancement des services

Commande utilisée :

```bash
docker-compose up -d --build
```

**Capture d’écran 2** : Résultat de la commande de lancement dans le terminal.

### 4. Vérification du statut des conteneurs

Une fois les services lancés, vérification que chaque conteneur est en état **Up**.

```bash
docker ps
```

**Capture d’écran 3** : Résultat de la commande `docker ps`.

## Tests de Connectivité et Démonstration

### Gestion de la Base de Données (Adminer)

Accès via : [http://localhost:8081](http://localhost:8081)

Paramètres de connexion :

- **Serveur** : `database`
- **Utilisateur** : `root`
- **Mot de passe** : `root`
- **Base** : `projetdb`

**Capture d’écran 4** : Interface Adminer connectée avec succès.

### Accès Frontend & Communication API

Le frontend (Nginx) sert la page `index.html`, qui interroge le backend pour obtenir l’heure de la base de données.

Accès via : [http://localhost:8080](http://localhost:8080)

**Capture d’écran 5** : Page Web affichant `En ligne : [Date]`.

## Résolution de problèmes (Debugging)

Lors du déploiement, une erreur a été rencontrée dans le conteneur backend :

```text
ReferenceError: données is not defined
```

- **Analyse** : En consultant les logs (`docker-compose logs backend`), le problème a été identifié comme une erreur de syntaxe liée à un mauvais formatage des commentaires dans `server.js`.
- **Correction** : Nettoyage du code source puis relance du build avec :

```bash
docker-compose up -d --build
```

**Capture d’écran 6** : Logs montrant l’erreur Node.js initiale.

## Accès MySQL en ligne de commande

Pour accéder à MySQL directement depuis le terminal :

1. Entrer dans le conteneur :
```bash
docker exec -it mysql_db mysql -u root -p
```

2. Afficher les bases :
```sql
SHOW DATABASES;
```

3. Quitter :
```bash
exit
```

**Capture d’écran 7** : Terminal montrant lexécution des commandes SQL dans le conteneur.

## Compétences validées

- [x] Manipulation des volumes et réseaux Docker
- [x] Configuration de Docker Compose
- [x] Création de Dockerfile sur mesure
- [x] Débogage de communication inter-conteneurs
