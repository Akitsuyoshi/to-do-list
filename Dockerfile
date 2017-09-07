FROM node:6.9.4

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install -g yarn
RUN yarn


# Bundle app source
COPY . /usr/src/app

# Build and optimize react app
RUN yarn run buildsu

EXPOSE 3000

# defined in package.json
CMD [ "yarn", "start" ]
