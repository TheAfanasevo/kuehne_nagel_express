FROM node:lts-alpine

# this can be set as a server environment variable
ARG argNODE_ENV=""
ENV NODE_ENV=$argNODE_ENV

# it sets directory in the container to /app to store files and launch our app.
WORKDIR /app
COPY package*.json /app/
RUN yarn install
COPY . /app/

# it exposes the port where our app is running that is port 8080.
EXPOSE  80

# run the tests
RUN yarn test

# it commands to run our app
#CMD node app.js
CMD ["yarn", "run", "dev"]