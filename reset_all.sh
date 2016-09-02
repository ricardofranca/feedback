#!/bin/sh -x
# instalar o nvm [https://github.com/creationix/nvm](https://github.com/creationix/nvm)
source ~/.nvm/nvm.sh
nvm i v5.11.0
nvm use v5.11.0
npm i pg nodemon -g
npm i sequelize sequelize-cli github:cmilfont/sequelize-migration-pg-extras
npm run db:drop
npm run db:create
npm i
NODE_ENV=development ./node_modules/sequelize-cli/bin/sequelize db:seed:all
