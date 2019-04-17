FROM node:10-alpine

# Create app directory
WORKDIR /app

# Install nodemon for hot reload
RUN npm install -g nodemon

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8888

CMD ["npm", "start"]
