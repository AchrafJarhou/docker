# Projet Docker : Tic Tac Toe Persistant

Ce depot contient la solution du Projet 07. L'objectif est de conteneuriser une application web de Morpion (Tic Tac Toe) et de garantir la persistance des scores avec Docker.

## Structure du projet

```text
.
|- images/               # Captures d'ecran des etapes
|- Dockerfile            # Configuration de l'image
|- index.html            # Interface du jeu
|- save.php              # Script de sauvegarde des scores
|- results.json          # Stockage JSON des resultats
|- readme.md             # Documentation du projet
```

## Etapes de realisation

### 1. Creation de l'image Docker

Le Dockerfile utilise l'image trafex/php-nginx:latest pour executer Nginx et PHP dans un seul conteneur leger.

Commande PowerShell :

```powershell
docker build -t tictactoe-game .
```

Capture a inserer :
- Commande docker build dans le terminal.

### 2. Gestion de la persistance avec volume

Pour conserver les scores meme apres redemarrage du conteneur, un volume Docker est cree.

Commandes PowerShell :

```powershell
docker volume create game-results
docker volume ls
docker volume inspect game-results
```

Capture a inserer :
- Resultat de docker volume ls.
- Resultat de docker volume inspect game-results.

### 3. Lancement du conteneur

Le port 8080 de la machine est mappe vers le port 8080 du conteneur.
Un bind mount est utilise pour synchroniser le dossier local vers /var/www/html.

Commande PowerShell :

```powershell
docker run -d `
	-p 8080:8080 `
	--name tictactoe-container `
	-v "${PWD}:/var/www/html" `
	tictactoe-game
```

## Inspection et validation

### Verification du fichier de resultats dans le conteneur

Commande PowerShell :

```powershell
docker exec -it tictactoe-container cat /var/www/html/results.json
```

Capture a inserer :
- Terminal affichant le contenu JSON avec les gagnants.

### Verification via Docker Desktop

L'onglet Files de Docker Desktop permet de voir en direct les modifications de results.json.

Capture a inserer :
- Docker Desktop affichant le fichier results.json.

## Resultats du jeu

Exemple de contenu de results.json apres plusieurs parties :

```json
[
	{ "winner": "X" },
	{ "winner": "O" },
	{ "winner": "Draw" }
]
```

Capture a inserer :
- Navigateur avec une partie terminee (victoire ou match nul).

## Concepts cles appris

- Bind mount vs volume nomme : usage du montage local pour developper rapidement et conserver les donnees.
- Permissions Linux : chmod 777 dans le Dockerfile pour autoriser l'ecriture de results.json par PHP.
- Isolation reseau : exposition du service via le mapping de port 8080:8080.

## Captures disponibles dans le dossier images

Les captures suivantes sont deja presentes :

- images/Capture d'écran 2026-03-24 164259.png
- images/Capture d'écran 2026-03-24 164353.png
- images/Capture d'écran 2026-03-24 164430.png
- images/Capture d'écran 2026-03-24 164745.png
- images/Capture d'écran 2026-03-24 164850.png
- images/Capture d'écran 2026-03-24 165422.png
- images/Capture d'écran 2026-03-24 165523.png
- images/Capture d'écran 2026-03-24 165649.png
- images/Capture d'écran 2026-03-24 165910.png
- images/Capture d'écran 2026-03-24 170311.png


