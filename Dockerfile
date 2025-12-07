# CAMBIO 1: Usamos Node 20 porque tus dependencias lo exigen
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# CAMBIO 2: Usamos 'npm install' en lugar de 'ci' para arreglar el error de sincronización
RUN npm install

COPY . .

# (Opcional) Compilación si fuera necesaria
# RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
