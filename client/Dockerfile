FROM node:14.17.3-buster as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production 

COPY . .

RUN npm run build

FROM nginx:1.12-alpine as prod

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# FROM node:14 AS Production

# ENV NODE_ENV=production

# WORKDIR /usr/src/client

# COPY package.json .
# COPY package-lock.json .

# RUN npm install

# COPY . .

# RUN npm run build

# CMD ["sh","-c","npm run start"]

# FROM node
# WORKDIR /app
# COPY package.json package.json
# COPY package-lock.json package-lock.json
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm","start"]

# # Build stage
# FROM node:alpine AS build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Production stage
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
