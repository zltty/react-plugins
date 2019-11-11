#!/bin/bash

rm -rf ./node_modules/react-components
git clone ssh://git@c.umiit.cn:2222/epb/ppz-react-components.git
cd ./react-components && rm -rf .git && rm .gitignore
cd ../ 
mv ./react-components ./node_modules/react-components

echo 'download react-components success!!'