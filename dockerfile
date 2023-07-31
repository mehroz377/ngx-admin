# Stage 1 - the build process
FROM node:14 as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.19.0-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html

# Custom nginx configuration to listen on port 4200
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
