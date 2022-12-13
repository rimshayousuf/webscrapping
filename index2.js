// const fs = require('fs');
// //
// fs.writeFileSync("Hello.txt",'Rimsha yousuf');

// fs.writeFileSync("code.txt",'some code');
// console.log('aaa',__filename);

// const gs = require('fs').writeFileSync;
// gs("rim.txt",'created');

const http = require('http');

function run(req,res){
    res.write('code developers RAFAY');
    res.end();
}

http.createServer(run).listen(4200);