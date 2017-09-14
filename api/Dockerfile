FROM node:latest
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
COPY ./models /usr/src/app/models
EXPOSE 8080
CMD npm start
