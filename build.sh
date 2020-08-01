#!/bin/sh

npm update
npm audit fix
npm run deploy
