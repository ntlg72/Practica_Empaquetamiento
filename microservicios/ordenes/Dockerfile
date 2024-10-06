FROM node:22.7.0

EXPOSE 3003

WORKDIR /ordenes

COPY src/controllers /ordenes/controllers

COPY src/models /ordenes/models

COPY src/index.js /ordenes

RUN npm init --yes

RUN npm install express morgan mysql mysql2 axios

CMD node index.js
