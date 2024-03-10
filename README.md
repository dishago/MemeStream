# Meme Streamer

The project allows user to create a meme post by providing name, caption and image URL for the meme. The user can also stream memes posted by other users and edit them as well (not the name of the meme owner).

## Features
1. Create a meme post with name, caption and image URL
2. Read memes stored in the database
3. Update existing memes (other than the owner's name)
4. Delete existing memes
5. View a single meme with a given id
6. Share memes with friends on Facebook, Twitter or WhatsApp
7. Dockerized solution (backend server) with Dockerfile in the parent directory
8. API documentation (backend server) using Swagger

<img width="1196" alt="image" src="https://github.com/dishago/MemeStream/assets/62263303/e15974e5-0a5c-47a7-9b9c-36e08140594d">

<img width="542" alt="image" src="https://github.com/dishago/MemeStream/assets/62263303/5be66ec5-d57a-4ab6-adc2-c82177d2c46a">



## Getting Started

The parent directory of the project has the following files and directories-

1. backend: It provides the backend server implementation using Node.js, Express and MongoDB.
2. frontend: It used Reactjs for development of the UI. It fetches and stores data in the backend server using axios.
3. install.sh: It contains all the dependencies needed to run the code.
4. server_run.sh: Once the required software is installed using install.sh, the server_run.sh will be invoked to get the backend server up and running.
5. sleep.sh: Once the server_run.sh is invoked (in the background), it may take a while to be up and running. So this script specifies the number of seconds it would like to wait (before the curl commands are run from test_server).
6. test_server.sh: This script provides commands to test the backend server.
7. Dockerfile: Dockerized backend solution, can be built and run
8. docker-compose.yml: To get the database as well as backend server running together through docker

## Prerequisites

The project is developed using the MERN tech stack.
