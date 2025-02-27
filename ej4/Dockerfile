
#FROM HACE REFERENCIA A OTRO STATE O STAGE
#----------------------------------------
#FROM --platform=arm64 node:19.2-alpine3.16

#FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16

FROM node:19.2-alpine3.16 as deps

# /app carpeta interna
WORKDIR /app

COPY package.json ./

RUN npm install

#----------------------------------------
FROM node:19.2-alpine3.16 as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

#Realizar test
#RUN npm run test

#RUN npm run build

#----------------------------------------
FROM node:19.2-alpine3.16 as prod-deps

WORKDIR /app

COPY package.json ./

RUN npm i --prod

#----------------------------------------
FROM node:19.2-alpine3.16 as runner

WORKDIR /app

COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks

# comando run de la imagen
CMD [ "node","app.js" ]
