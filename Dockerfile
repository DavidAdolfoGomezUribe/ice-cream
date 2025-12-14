# Imagen ligera y estable
FROM nginx:alpine

# Copia TODO el contenido del repo al root de nginx
COPY . /usr/share/nginx/html

# Puerto interno del contenedor
EXPOSE 80

# Nginx ya viene con el CMD correcto
