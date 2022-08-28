
const express = require('express');
const path = require('path');
const app = express();
const port = 2000;
const staticFiles = path.join(__dirname,"/public");

// console.log(__dirname);
console.log(staticFiles);
// app.use(express.static(staticFiles));
app.set('view engine','ejs');

// app.set("views",staticFiles);


// app.set('view engine', 'jade');
// app.set('view engine', 'html');

app.get('/' , (req,res) => {
    a = {
        name :"Jayesh", surname:"khandelwal"
    };
    res.render('index', a);
});



app.get('/about' , (req,res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/contact' , (req,res) => {
    res.send('<h1>Contact Page</h1>');
});

app.get('/Link' , (req,res) => {
    res.send('<h1>Link Page</h1>');
});

app.get('/' , (req,res) => {
    res.send('<h1>Error naitik</h1>');
});


app.listen(port , ()=> {
    console.log("Server Started At Port " +port)
});