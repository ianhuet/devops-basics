FROM node:20-alpine3.17

WORKDIR /backend
ADD app /backend

RUN npm install

EXPOSE 81
ENTRYPOINT ["npm", "run", "start"]
