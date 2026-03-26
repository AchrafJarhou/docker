FROM php:8.3-fpm

# Installation des extensions PHP nécessaires pour Symfony et MySQL
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    && docker-php-ext-install pdo_mysql zip

WORKDIR /var/www/html