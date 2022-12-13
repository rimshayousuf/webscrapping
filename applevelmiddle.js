const express = require('express');
const app = express();

//reqFilter(middleware) used for checking res and req
//aplication level middleware
const reqFilter = (req,res,next) =>{
    if(!req.query.age){
       res.send('please provide age');
    }
    // else if(req.query.age >= 18){
    //     res.send('you can access this page');
    // }
    else if(req.query.age < 18){
        res.send('you can not access this page,(under age)');
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
app.get('/about',(req,res)=>{
    res.send("Welcome to about page");
});

//set port for server
app.listen(3050);