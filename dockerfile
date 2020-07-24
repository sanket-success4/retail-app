FROM alpine:latest as build-stage

RUN apk update
RUN apk add nodejs
RUN apk add npm
RUN apk add git

ADD . / home/frontend/
WORKDIR home/frontend/
RUN npm install
RUN npm run build

FROM nginx:latest

COPY --from=build-stage home/frontend/build/ /usr/share/nginx/html

COPY --from=build-stage home/frontend/nginx_conf/nginx.conf /etc/nginx/conf.d/default.conf