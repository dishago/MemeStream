#!/bin/bash


# Any installation related commands

curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -

curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

sudo apt update

sudo apt install -y nodejs
sudo apt install -y mongodb-org


# Any configuration related commands
