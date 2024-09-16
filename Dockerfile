FROM node:20.13.1-alpine3.18
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
COPY --chown=node:node . .
RUN npm install
EXPOSE 3000

CMD [ "node", "server.js" ]
