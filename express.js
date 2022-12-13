const express = require('express');
const app = express();

app.get('',(req,res) =>{
  res.send(`<h1>Welcome to this home page</h1> <a href='/about'>about page</a>`);
});

app.get('/about',(req,res) =>{
    // console.log('data sent by browser',req.query.name);
    // res.send('Welcome, '+req.query.name);
    res.send(`<input type='text' placeholder='Enter name' />
    <button>click </button>
    `);
  });

app.get('/contact',(req,res) =>{
   res.send([
    {
        id:1,
        name:'rimsha',
        email:'rimsha@gmail.com',
        gender:'female',
        canvote:true
    },
    {   id:2,
        name:'rafay',
        email:'rafay@gmail.com',
        gender:'male',
        canvote:true
    }
   ]);
});

app.listen(5000);