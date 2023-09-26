FROM node:20-alpine3.17 as builder

WORKDIR /frontend
ADD app /frontend

RUN rm -rf dist
RUN npm install
RUN npm run build

FROM nginx:1.25.2-alpine
COPY --from=builder /frontend/dist /usr/share/nginx/html
ADD config/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
