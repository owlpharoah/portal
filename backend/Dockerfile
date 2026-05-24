FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

EXPOSE 5000

# Development command
CMD ["npm", "run", "dev"]
