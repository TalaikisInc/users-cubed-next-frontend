FROM keymetrics/pm2:latest-alpine

RUN apk add --no-cache --virtual .build-deps git python make g++ autoconf automake file build-base nasm musl libpng-dev zlib-dev libtool

RUN npm i -g pm2

WORKDIR /var/www/app
COPY ./package.json ./
RUN npm i
COPY ./ ./

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production 

RUN npm run build
RUN apk del .build-deps

CMD ["pm2-runtime", "server.js", "i", "2"]
