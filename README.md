# [tokefit.com](http://tokefit.com)

Este embudo de ventas fue configurado con Apache2.

---

## 1. Subir el proyecto

```bash
cd /var/www
git clone <repo>
```

---

## 2. Configurar Apache2

Instalar Apache si no está ya instalado:

```bash
sudo apt install apache2
```

Luego, configurar el virtual host:

```bash
cd /etc/apache2/sites-available
sudo cp 000-default.conf tokefit.conf
sudo nano tokefit.conf
```

Contenido sugerido para `tokefit.conf`:

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

---

## 3. Activar el sitio

```bash
sudo a2dissite 000-default.conf
sudo a2enmod rewrite
sudo a2ensite tokefit.conf
sudo systemctl reload apache2
```

---
