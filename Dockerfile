FROM node:12

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

EXPOSE 3333

CMD node ./src/index.js

