var http = require('http');
var colors = require('colors');
var url = require('url');

var handlers = require('./handlers'); // nasz moduł

function start() {
  function onRequest(request, response) {
    console.log("Odebrano zapytanie.".green);
    console.log("Zapytanie " + request.url + " odebrane.");

    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
	var url_parts = url.parse(request.url, true);
	console.log(url_parts);
    switch (url_parts.pathname) { // switch rozróżniający zapytania
        case '/':
        case '/start':
            handlers.welcome(request, response);
            break;
        case '/upload':
            handlers.upload(request, response);
            break;
		case '/show':
			handlers.show(request, response);
			break;				
        default:
            handlers.error(request, response);
    }
  }

  http.createServer(onRequest).listen(9000);

  console.log("Uruchomiono serwer na localhost 9000!".green);
}

exports.start = start;