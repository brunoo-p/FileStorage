# FROM node:lts-alpine
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# # RUN npm install --production --silent && mv node_modules ../
# RUN npm install --production --silent
# RUN npm install --location=global @angular-devkit/build-angular
# RUN npm install --location=global @angular/cli
# # RUN node_modules/.bin/ng build --prod
# COPY . .
# EXPOSE 4200
# RUN chown -R node /usr/src/app
# USER node
# CMD ["npm", "start"]

# FROM nginx:alpine
# COPY --from=node /app/dist/demo-app /usr/share/nginx/html
FROM node:latest

WORKDIR /app
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /app

CMD ng serve --host 0.0.0.0
