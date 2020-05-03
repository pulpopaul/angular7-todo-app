FROM node:10.16.3-alpine

WORKDIR /api

RUN npm install -g nodemon

COPY package*.json ./

RUN npm ci \
 && npm cache clean --force \
 && mv /api/node_modules /node_modules

COPY . .

EXPOSE 3000

RUN npm install -g nodemon

CMD [ "node", "index.js" ] 