const http = require('http');
const options = {
    host:'127.0.0.1',
    port:8081,
    path:'/data.html'
}


const serverResponse = (response)=>{
    let body = '';
    response.on('data', (data)=>{
        body = body+ data
    })

    response.on('end', ()=>{
        console.log('final body ', body)
    })
}

http.request(options, serverResponse).end();