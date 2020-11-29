// node

// to create server
// http module
// http.createserver
//listen port


const http = require('http');
const url  = require('url');
const fs = require('fs');
const path = require('path');

console.log('in server')
http.createServer((req, res)=>{
    let pathname = url.parse(req.url).pathname;
    const filepath = path.join(__dirname+pathname)
    fs.readFile(filepath, (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'})
        }else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data)
        }
        res.end();
    })

}).listen(8081);


console.log('Listening on http://127.0.0.1:8081');