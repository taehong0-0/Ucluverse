#!/bin/bash
REPOSITORY=/home/ubuntu/build
sudo pm2 kill
cd $REPOSITORY

cd server
sudo rm -rf node_modules
sudo npm install
sudo pm2 kill
sudo pm2 start app.js