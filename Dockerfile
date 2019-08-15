FROM keymetrics/pm2:latest-alpine

RUN npm i -g pm2
RUN apk add --no-cache --virtual .build-deps git python make g++ autoconf automake file build-base nasm musl libpng-dev zlib-dev libtool

WORKDIR /var/www/app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm i
COPY ./ ./

ENV NODE_ENV production 
ENV PORT 3000

EXPOSE 3000

RUN npm run build
RUN apk del .build-deps

CMD ["pm2-runtime", "server.js", "i", "2"]
