var http = require('http');
var fs = require('fs');

var server = http.createServer();

console.log('Internet browser --> http://localhost:9000 or http://localhost:9000/getsite');

server.on('request', function(request, response) {
	if (request.method === 'GET' && request.url === '/getsite') {
		response.setHeader('Content-Type', 'text/html; charset=utf-8');
		fs.readFile('./index.html', 'utf-8', function(err, data) {
			response.write(data);
			response.end();
		});
	} else {
		response.statusCode = 404;
		response.write('<h1>404 - Page not found!</h1><br><img src="https://images.pexels.com/photos/229014/pexels-photo-229014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=375&w=630" alt="404 page not found">');
		response.end();
	}
});

server.listen(9000);