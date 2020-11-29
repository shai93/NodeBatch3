const readLine = require('readline');


const readline = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})


readline.question(`what's ur name? `, (data)=>{
    console.log(`Hey ${data}`);
    readline.close();
})

