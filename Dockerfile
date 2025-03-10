# Usa la imagen oficial de Node.js
FROM node:current-alpine

# Instala pnpm globalmente
RUN npm install -g pnpm

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de pnpm
COPY package.json pnpm-lock.yaml ./

# Instala las dependencias del proyecto
RUN pnpm install

# Copia el resto del código
COPY . .

# Construye la aplicación (si es necesario)
RUN pnpm build

EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["pnpm", "start"]