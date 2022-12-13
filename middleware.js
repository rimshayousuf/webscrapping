const express = require('express');
const app = express();

//reqFilter(middleware) used for checking res and req

const reqFilter = (req,res,next) =>{
    if(!req.query.age){
       res.send('please provide age');
    }
    else if(req.query.age >= 18){
        res.send('you can access this page');
    }
    else{
        next();
    }   
}

app.use(reqFilter);


//setting route
app.get('/',(req,res)=>{
    res.send("Welcome to home page");
});
app.get('/users',(req,res)=>{
    res.send("Welcome to users page");
});

//set port for server
app.listen(6000);