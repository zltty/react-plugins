#!/bin/bash

yarn build
git add .
git commit -m $1
git checkout -b $3
git push $2 $3
git push $2 $3:master