

# Welcome to Docker - Projet 2

## 1. Installation
[Version](images/version.png)
Commande utilisée : `docker --version`

## 2. Lancement du projet
Commande : `docker run -it --rm -p 8088:80 docker/welcome-to-docker`
Description : Cette commande lance un serveur web accessible sur le port 8088. 
L'option --rm permet de ne pas laisser de traces après l'arrêt.

## 3. Nettoyage

# Suppression Docker

## Suppression des conteneurs

- **Un conteneur spécifique**
  ```bash
  docker rm <ID_ou_NOM>
  ```

- **Plusieurs conteneurs**
  ```bash
  docker rm <ID1> <ID2>
  ```

- **Tous les conteneurs arrêtés**
  ```bash
  docker container prune
  ```

- **Forcer la suppression d'un conteneur actif**
  ```bash
  docker rm -f <ID_ou_NOM>
  ```

## Suppression des images

- **Une image spécifique**
  ```bash
  docker rmi <NOM_IMAGE>
  ```

- **Plusieurs images**
  ```bash
  docker rmi <IMAGE1> <IMAGE2>
  ```

- **Toutes les images inutilisées**
  ```bash
  docker image prune -a
  ```

- **Forcer la suppression d'une image**
  ```bash
  docker rmi -f <NOM_IMAGE>
  ```

# Note importante
```
 On ne peut pas supprimer une image (rmi) tant que le conteneur qui l'utilise n'est pas supprimé (même s'il est arrêté).

La correction : Il faut d'abord faire docker rm du conteneur, PUIS docker rmi de l'image. Ou utiliser le flag -f (mais c'est moins "propre").
```