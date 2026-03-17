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