# Se crea imagen basada en la imagen oficial de Node JS de dockerhub
FROM node:6

# Crea el directorio donde va a ser colocada la aplicación
RUN mkdir -p /usr/src/app

# Ingresa a la carpeta donde se encuentra la aplicación 
WORKDIR /usr/src/app

# Copia el archivo donde se encuentran descriptas las dependencias de la aplicacion
COPY package.json /usr/src/app

# Instala las dependencias
RUN npm install

# Copia el codigo fuente a la ruta
COPY . /usr/src/app

# Expone el puerto en la la aplicacion correrá
EXPOSE 8080:8080

# Inicia la aplicación
CMD ["npm", "start"]
