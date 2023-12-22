const http = require('http');
const data = require('./data-from-API');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' });
    res.write(JSON.stringify(data)); //write a response to the client
    res.end(); //end the response
}).listen(2300); //the server object listens on port 2300