const express = require('express');

//path helps to accessfolder in project 
const path = require('path');
const { addAbortSignal } = require('stream');

const app = express();
const publicPath = path.join(__dirname,'public');
// console.log(publicPath);

//using middleware 'use' it is a function of express
//express.static static is function, will load static content(html) from public folder

//app.use(express.static(publicPath));
app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/profile',(req,res)=>{
    const user ={
        name:"rimsha",
        age: 23,
        gender:"female",
        email: "rimsha@gmail.com",
        city:"karachi",
        skills:['js','php','C++','python','node','java','dart']
    }
    res.render('profile',{user});
});

app.get('/login',(req,res)=>{
   res.render('login');
})
app.get('/aboutme',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});

//sendFile used to load file in a get method(path)
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/404.html`);
});
app.listen(5000);