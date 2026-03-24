# 1. Image de base légère
FROM node:20-slim

# 2. Sécurité : On ne tourne pas en 'root'
RUN useradd -m appuser
WORKDIR /home/appuser/app

# 3. Optimisation du cache : on copie d'abord les fichiers de dépendances
COPY package*.json ./
RUN npm install --production

# 4. Copie du reste du code
COPY . .

# 5. On donne les droits à notre utilisateur non-root
RUN chown -R appuser /home/appuser/app
USER appuser

# 6. Documentation et lancement
EXPOSE 3000
CMD ["node", "server.js"]