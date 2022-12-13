const express = require('express');

//define/export middleware
const reqFilter = require('./reqfiltermid');
const app = express();
//exporting route
const route = express.Router();

route.use(reqFilter);
//setting route
app.get('/',(req,res)=>{
    res.send("Welcome to home page");
});
app.get('/users',(req,res)=>{
    res.send("Welcome to users page");
});
route.get('/about', (req,res)=>{
    res.send("Welcome to about page");
});
route.get('/contact', (req,res)=>{
    res.send("Welcome to contact page");
});

app.use('/api',route);
//set port for server
app.listen(3050);