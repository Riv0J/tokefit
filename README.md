# [tokefit.com](http://tokefit.com)
Este embudo de ventas fué configurado con apache2:

## 1. Subir el proyecto

- cd /var/www
- git clone github.com/Riv0J/tokefit

## 2. Configurar apache2

- apt install apache2
- cd /etc/apache2/sites-available
- cp 000-default.conf tokefit.conf
- nano tokefit.conf

En tokefit.conf:

```apache
<VirtualHost *:80>
    ServerAdmin admin@example.com
    ServerName example.com
    DocumentRoot /var/www/app/

    <Directory /var/www/app/>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

## 3. Activar el sitio

- sudo a2dissite 000-default.conf
- sudo a2enmod rewrite
- sudo a2ensite app.conf
- sudo systemctl reload apache2