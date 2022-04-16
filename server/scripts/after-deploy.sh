#!/bin/bash
REPOSITORY=/home/ubuntu/build
cd $REPOSITORY

cd server
NODE_ENV=development node dist/main.js