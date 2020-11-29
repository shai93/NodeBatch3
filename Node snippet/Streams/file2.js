const fs = require('fs');
const ws =  fs.createWriteStream('file2.txt');

const http = require('http').createServer();

for(let i = 0; i< 100000; i++){
    ws.write('hello')
}
ws.end();