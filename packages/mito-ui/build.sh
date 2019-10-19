#!/bin/bash
yarn build
git add .
git commit -m $2 
git push origin $1:master