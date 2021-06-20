FROM node

WORKDIR /app

COPY . /app

RUN npm i -g typescript

RUN npm i -D typescript ts-node nodemon @types/node @types/express

RUN npm install

EXPOSE 300

CMD ["npm","run","dev"]


