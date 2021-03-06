const http = require('http');
const fs = require('fs');
//const http2 = require('http2') https

const server = http.createServer((req, res, next) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.method);

  const url = req.url;
  if (url === '/') {
    fs.createReadStream('./html/index.html').pipe(res);
  } else if (url === '/courses') {
    fs.createReadStream('./html/courses.html').pipe(res);
  } else {
    fs.createReadStream('./html/not-found.html').pipe(res);
  }
});

server.listen(8080);
