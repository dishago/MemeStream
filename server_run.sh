#!/bin/bash

cd backend

# Setup DB or any other environment variables you want to setup.

sudo systemctl start mongod.service
sudo systemctl enable mongod

npm install

npm run server