# Use the official Node.js image as the base image
FROM node:latest

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Compile TypeScript to JavaScript
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["pnpm", "start"]