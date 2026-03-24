# Mon Super Projet Dockerisé (Node.js + Express)

Ce projet est une application Node.js ultra-légère, sécurisée et entièrement containerisée avec Docker. 

## Points forts du Dockerfile
- **Sécurité** : L'application tourne sous un utilisateur non-root (`appuser`).
- **Performance** : Utilisation d'une image de base `node:20-slim`.
- **Optimisation** : Mise en cache des couches (layers) pour un build ultra-rapide.

---

## 🛠 Pré-requis
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé.
- Un terminal (Bash, PowerShell ou Zsh).

---

## Lancement rapide (Ready in 1 minute)

### 1. Cloner le projet
```bash
git clone [https://github.com/TON_PSEUDO/TON_NOM_DE_REPO.git](https://github.com/TON_PSEUDO/TON_NOM_DE_REPO.git)
cd TON_NOM_DE_REPO
```

### 2. Builder l'image Docker
Cette commande crée l'image localement à partir du Dockerfile.

```bash
docker build -t mon-app-express:1.0.0 .
```

### 3. Lancer le conteneur
On mappe le port 9000 de votre machine au port 3000 du conteneur.

```bash
docker run -p 9000:3000 --name mon-serveur-test mon-app-express:1.0.0
```

##  Vérification
Une fois lancé, ouvrez votre navigateur et accédez à :

👉 http://localhost:9000

Vous devriez voir le message :  Mon Docker fonctionne !

##  Commandes utiles

- Arrêter le conteneur : `docker stop mon-serveur-test`
- Voir les logs : `docker logs -f mon-serveur-test`
- Supprimer le conteneur : `docker rm mon-serveur-test`