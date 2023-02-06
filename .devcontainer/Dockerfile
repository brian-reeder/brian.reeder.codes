FROM node:lts-alpine

RUN apk update && apk add chromium
ENV CHROME_BIN=/usr/bin/chromium-browser \
    CHROME_PATH=/usr/lib/chromium/

RUN npm install -g "@angular/cli"