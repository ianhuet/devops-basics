FROM node:20-alpine3.17

WORKDIR /backend
ADD app /backend

# ADD config/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]
