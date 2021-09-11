const http = require('http');
//const http2 = require('http2') https

const server = http.createServer((req, res, next) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.method);
  res.write('welcome');
  res.end();
});

server.listen(8080);
