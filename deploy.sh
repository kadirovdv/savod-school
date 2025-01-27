#!/bin/bash 

git pull https://kadirovdv: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@github.com/kadirovdv/savod-school --allow-unrelated-histories

yarn add

yarn build

rm -r /usr/share/nginx/html/savodschool/

mkdir /usr/share/nginx/html/savodschool


cp -r ./dist/savod-angular/* /usr/share/nginx/html/savodschool/