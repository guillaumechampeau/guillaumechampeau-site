# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:alpine as production-stage

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*
RUN mkdir -p  /usr/share/nginx/html

COPY --from=build-stage /app/dist /usr/share/nginx/html

RUN mkdir -p /usr/share/nginx/html/.well-known/matrix
RUN echo '{ "m.server": "matrix.guillaumechampeau.com:8448" }' > /usr/share/nginx/html/.well-known/matrix/server
RUN echo '{ "m.homeserver": { "base_url": "https://matrix.guillaumechampeau.com" }, "org.matrix.msc4143.rtc_foci": [ { "type": "livekit", "livekit_service_url": "https://matrix.guillaumechampeau.com/livekit-jwt-service" } ] }' > /usr/share/nginx/html/.well-known/matrix/client

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
