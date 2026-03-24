# On part d'une image PHP + Nginx
FROM trafex/php-nginx:latest

# On définit le dossier de destination interne (Linux)
WORKDIR /var/www/html

# On copie tes fichiers de C:\wamp64\...\runtrack07 vers /var/www/html
COPY . .

# On s'assure que PHP a le droit d'écrire dans results.json
USER root
RUN chmod 777 /var/www/html/results.json
USER nobody

EXPOSE 8080