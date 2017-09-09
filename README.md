# A React/Redux TodoList App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) in Docker.
The code is written, according to the blog [post](https://hackernoon.com/a-guide-to-tdd-a-react-redux-todolist-app-part-1-b8a200bb7091).

### Setup to use

1 Install this repo

`$ git clone https://github.com/Akitsuyoshi/to-do-list`


2 Build this image from Dockerfile

`$ docker build -t IMAGE_NAME .`

3 In background, docker run this image with binding local port 3000 to container's 3000

`$ docker run -d -p 3000:3000 IMAGE_NAME`


And if you visit http://localhost:3000/, you see this todolist run.


When you'd like to stop stop application, this is the commands
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

---

### The left thing to do

* To add the functionality, which makes the button disable
* To deploy it on Heroiku
