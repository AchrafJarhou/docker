# Runtrack Symfony - UNIT_SYMFONY

Ce projet contient une application Symfony 7 tournant sous Docker avec une stack complète (PHP 8.3, Nginx, MySQL 8.0, et PHPMyAdmin).

## Pré-requis

* **Docker Desktop** installé et fonctionnel.
* **Dossier du projet** : `UNIT_SYMFONY/` contenant le dossier `app/`.

## Installation et Lancement

1.  **Cloner le projet** et se placer à la racine du dossier :
    ```cmd
    cd UNIT_SYMFONY
    ```

2.  **Lancer les conteneurs** (la première fois, cela construit l'image PHP) :
    ```cmd
    docker compose up -d --build
    ```

3.  **Configurer les permissions** (nécessaire pour le cache Symfony sur Linux/Docker) :
    ```cmd
    docker exec -it Symfony_app chown -R www-data:www-data /var/www/html/var
    ```

## Accès aux services

Une fois les conteneurs lancés, les services sont accessibles aux adresses suivantes :

* **Application Symfony** : [http://localhost:8080](http://localhost:8080)
* **PhpMyAdmin** : [http://localhost:8081](http://localhost:8081)
    * *Serveur* : `Symfony_db`
    * *Utilisateur* : `Symfony`
    * *Mot de passe* : `Symfony`

## Structure des Conteneurs

| Nom du conteneur | Image | Port Externe |
| :--- | :--- | :--- |
| **Symfony_app** | php:8.3-fpm | 9000 (interne) |
| **Symfony_web** | nginx:alpine | 8080 |
| **Symfony_db** | mysql:8.0 | 3306 |
| **Symfony_pma** | phpmyadmin | 8081 |

## Commandes Utiles

* **Arrêter les services** : `docker compose stop`
* **Relancer les services** : `docker compose start`
* **Entrer dans le conteneur PHP** : `docker exec -it Symfony_app bash`
* **Voir les logs Nginx** : `docker logs Symfony_web`


## Configuration de la Base de Données

L'application Symfony est configurée pour communiquer avec le conteneur MySQL via le fichier `app/.env`.

**Connexion Doctrine :**
```text
DATABASE_URL="mysql://Symfony:Symfony@symfony_db:3306/Symfony?serverVersion=8.0"
```


## Initialisation de la base :
Si vous installez le projet pour la première fois, lancez la commande suivante pour créer la base de données à l'intérieur du conteneur :

```cmd
docker exec -it Symfony_app php bin/console doctrine:database:create --if-not-exists
```

## Accès via PHPMyAdmin :

URL : http://localhost:8081

Serveur : symfony_db

Utilisateur : Symfony

Mot de passe : Symfony