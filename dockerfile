FROM node:latest

WORKDIR /api

COPY . .

RUN npm install

CMD [ "node", "src/index.ts" ]

EXPOSE 3000
