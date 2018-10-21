const Koa = require('koa')
const app = new Koa()
const https = require('https')
const fs = require('fs')

const options = {
  key: fs.readFileSync('./credencials/server.key'),
  cert: fs.readFileSync('./credencials/server.crt')
};

app.use(event => {
  event.body = 'Hello World';
});

https.createServer(options, app.callback()).listen(443);
