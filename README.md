This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
The code is written with React.js, ES6, and Redux.

## A guide to TDD a React/Redux TodoList App

Here it the setup to install
```
$ git https://github.com/Akitsuyoshi/to-do-list

// It builds the image, while adding specific name
$ docker build -t IMAGE_NAME .

// It confirms you that the image exist with the added name
$ docker images

// In background, docker run this image with binding local port 3000 to container's 3000
$ docker run -d -p 3000:3000 IMAGE_NAME
```
And if you visit http://localhost:3000/, you make this run.

When you stop application, this is the commands
```
// It shows the container ID
$ docker container ls

// To stop the process with ID
$ docker stop CONTAINER_ID
```

---

Below here, it shows how to test in the container

```
$ docker exec -it CONTAINER_ID bash

// Unit test:
/usr/src/app# npm run test

// e2e/feature test:
/usr/src/app# npm run selenium-setup   // run only once
/usr/src/app# npm run selenium-start   // app must also be started with

/usr/src/app# npm run e2e-tests
/usr/src/app# npm run e2e-tests-watch  // if you want to run e2e in watch mode

/usr/src/app# exit
```
