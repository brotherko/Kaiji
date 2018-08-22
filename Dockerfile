FROM node:9.5 as builder 

RUN mkdir /app
WORKDIR /app

COPY ./src ./src
COPY ./public ./public
COPY ./package*.json ./ 
COPY ./config-overrides.js ./ 

RUN npm install
RUN npm run build

FROM nginx:1.15

COPY --from=builder /app/build/ /usr/share/nginx/html
