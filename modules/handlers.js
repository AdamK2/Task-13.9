var formidable = require('formidable');
var fs = require('fs');
var url = require('url');

exports.upload = function(request, response) {
    console.log("Rozpoczynam obsługę żądania upload.");
    var form = new formidable.IncomingForm();
    form.parse(request, function(error, fields, files) {
		const {title } = fields;
        fs.renameSync(files.upload.path, `${title}.png`);
        response.writeHead(200, {"Content-Type": 'text/html'});
        response.write("received image:<br/>");
        response.write(`<img src='/show?file=${title}' />`);
        response.end();
    });
}

exports.welcome = function(request, response) {
    console.log("Rozpoczynam obsługę żądania welcome.");
    fs.readFile('templates/start.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
}

exports.error = function(request, response) {
    console.log("Nie wiem co robić.");
    response.write("404 :(");
    response.end();
}

exports.show = function(request, response) {
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
    fs.readFile(`${query.file}.png`, "binary", function(error, file){
        response.writeHead(200, {"Content-Type": "image/png"});        		
		response.write(file, "binary");
		response.end();
    });
}