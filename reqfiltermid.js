//reqFilter(middleware) used for checking res and req
//aplication level middleware
module.exports = reqFilter = (req,res,next) =>{
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

//app.use(reqFilter);

