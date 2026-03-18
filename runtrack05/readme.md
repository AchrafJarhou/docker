# TP : Serveur Apache et PHP avec Docker

## Description
Ce projet consiste à créer une image Docker personnalisée incluant un serveur Apache et PHP pour afficher les informations système.

## Installation et Utilisation

### 1. Construction de l'image
```bash
docker build -t mon-serveur-php .
```

### 2. Lancement du conteneur
```bash
docker run -d -p 80:80 --name mon-serveur-php-container mon-serveur-php
```
### 3. Accès à l'application
Ouvrez votre navigateur et accédez à `http://localhost`. Vous devriez voir une page affichant les informations système grâce à PHP. 
### 4. Arrêt du conteneur
```bash
docker stop mon-serveur-php-container
```
### 5. Suppression du conteneur
```bash
docker rm mon-serveur-php-container
```
### 6. Suppression de l'image
```bash
docker rmi mon-serveur-php
```
## Conclusion
Ce projet démontre comment utiliser Docker pour créer un environnement de développement web avec Apache et PHP. Vous pouvez personnaliser davantage l'image en ajoutant des extensions PHP ou en configurant Apache selon vos besoins.  
