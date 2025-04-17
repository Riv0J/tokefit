# [tokefit.com](http://tokefit.com)

Esta web está siendo servida con apache2, con un certificado de Let's Encrypt:

## 0. Conectar el dominio, con el servidor

Registro A
- Nombre: @
- Valor: IP del servidor
- TTL 3600

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
    ServerName tokefit.com
    DocumentRoot /var/www/tokefit/

    <Directory /var/www/tokefit/>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Tarea cron para que apache se inicie si no está activo:

- crontab -e

```apache
* * * * * systemctl is-active --quiet apache2 || (echo "$(date): Apache2 estaba caído, se inició" >> /var/log/apache_monitor.log && systemctl start apache2)
```

## 3. Activar el sitio

- sudo a2dissite 000-default.conf
- sudo a2enmod rewrite
- sudo a2ensite app.conf
- sudo systemctl reload apache2

## 4. Certificado SSL gratuito

Utilizar certificado gratuito de Let's Encrypt, automaticamente renovado por Certbot:

# [Instrucciones de Certbot](https://certbot.eff.org/instructions?ws=apache&os=pip)
