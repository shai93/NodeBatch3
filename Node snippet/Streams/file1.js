// streams

const fs = require('fs');
const ws =  fs.createWriteStream('file1.txt');
for(let i = 0 ; i<20; i++){
    // fs.writeFile('file1.txt', 'hello '+i, function(err , data){
    //     if(err){
    //         console.log(err)
    //     }
    // })
    // ws.write('hello '+i);
    fs.writeFileSync('file1.txt', 'hello '+i)
}

ws.end();




// big file  10millions

// readFile memory, 


// memory

// memory