var http = require('http');

const port = process.env.PORT || 1337;
const ipAddress = '0.0.0.0';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis and Heroku part trois!\n');
}).listen(port, ipAddress);

console.log(`Server running at http://${ipAddress}:${port}/`);
