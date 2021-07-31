FROM node:14.15.3



RUN mkdir -p /usr/src/epitrade-app
WORKDIR /usr/src/epitrade-app
COPY . /usr/src/epitrade-app/

RUN npm install
RUN npm run build

EXPOSE 80

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

CMD [ "npm", "run", "start" ]
