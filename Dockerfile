FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
RUN npm install pm2 -g
RUN mkdir -p /usr/FILE
COPY . .
EXPOSE 3001
CMD ["pm2-runtime", "app.js"]