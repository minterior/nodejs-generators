var http = require('http');
var async = require('async');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    var g = simpleGenerator();
    do {
        var current = g.next();
        console.log(current);
        if (current.value) res.write(current.value);
    } while (!current.done);

    res.end('\nHappy ending!\n');

}).listen(3000, '127.0.0.1');


function* simpleGenerator() {
    for (var i = 0; i < 3; i++) {
        yield i.toString();
    }
}
