const fs = require('fs');

// const result = fs.readFileSync('Read.txt');


let temp;

fs.readFile('Read.txt', function(err, data){
    if(err){
        console.log("Error: ", err)
    }else{
        temp = data;
        console.log(temp)
        console.log(data.toString());
    }
})


// console.log(result)
// console.log('Second statment')
// console.log('third statement');


// const s = "Hello Earth";
// const bufferValue = Buffer.from(s)

// console.log(bufferValue.toString())