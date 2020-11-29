const fs  = require('fs');
const http = require('http').createServer();
console.log(process.pid)
http.on('request', (req, res)=>{
    const rs =  fs.createReadStream('file2.txt');
    // fs.readFile('file2.txt', function(err, data){
    //     console.log('data')
    // })
    // rs.on('readable', function(err, data){
    //     console.log('data')
    // })
    rs.pipe(res)

})

http.listen(1234)