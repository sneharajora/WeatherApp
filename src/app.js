const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;
const  hbs = require('hbs');

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templaates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.use(express.static(static_path));
hbs.registerPartials(partials_path);

//routing
app.get( "",(req,res)=>{
    res.render('index');
})

app.get( "/about",(req,res)=>{
    res.render('about.hbs');
})

app.get("/weather",(req,res)=>{
    res.render('weather.hbs');
})

app.get( "*",(req,res)=>{
    res.render("404 error oops",{
        errorMsg:'Opps! Page Not Found'
    });
})
app.listen(port ,()=>{
    console.log(`Listening on port ${port}`);
})