FROM node:14

#app dircetory
WORKDIR /usr/src/app

#install dependencies
COPY package*.json ./
RUN npm install

#bundle app source
COPY . .
EXPOSE 3000
CMD ["npm", "start"]