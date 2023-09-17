npm init -y

npm install nodemon --save-dev

npm install ts-node --save-dev

add this to package.json
"scripts": {
"start": "nodemon --watch 'src/\*_/_.ts' --exec './node_modules/.bin/ts-node' src/index.ts"
}

npm install uuid
npm install --save-dev @types/express
