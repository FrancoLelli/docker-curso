#FROM --platform=arm64 node:19.2-alpine3.16

FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16

# /app carpeta interna
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

#Realizar test
#RUN npm run test

#Eliminar librerias que en produccion no utilizamos e instala las dev de produccion 
RUN rm -rf test && rm -rf node_modules && npm install --prod

# comando run de la imagen
CMD [ "node","app.js" ]
