# Meme Streamer

The project allows user to create a meme post by providing name, caption and image URL for the meme. The user can also stream memes posted by other users and edit them as well (not the name of the meme owner).

## Getting Started

The parent directory of the project has the following files and directories-

1. backend: It provides the backend server implementation using Node.js, Express and MongoDB.
2. frontend: It used Reactjs for development of the UI. It fetches and stores data in the backend server using axios.
3. install.sh: It contains all the dependencies needed to run the code.
4. server_run.sh: Once the required software is installed using install.sh, the server_run.sh will be invoked to get the backend server up and running.
5. sleep.sh: Once the server_run.sh is invoked (in the background), it may take a while to be up and running. So this script specifies the number of seconds it would like to wait (before the curl commands are run from test_server).
6. test_server.sh: This script provides commands to test the backend server.

### Prerequisites

The project is developed using the MERN tech stack.

## Deployment

The project has been deployed on Heroku and can be viewed at https://disha-memestream.herokuapp.com (frontend) and https://disha-xmeme.herokuapp.com (backend)

## API documentation
API documentation is done using Swagger and can be found locally at http:localhost:8081/swagger-ui/ OR publically deployed at http://disha-xmeme.herokuapp.com/swagger-ui/
