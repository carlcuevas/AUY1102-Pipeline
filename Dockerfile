FROM node:18-alpine

WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos dependencias de forma limpia
RUN npm ci

# Copiamos el resto del código
COPY . .

# Exponemos el puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
