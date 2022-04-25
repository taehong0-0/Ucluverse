#!/bin/bash
REPOSITORY=/home/ubuntu/build
sudo pm2 kill
cd $REPOSITORY

cd server
sudo pm2 kill
sudo pm2 start dist/main.js