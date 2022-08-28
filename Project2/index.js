const express = require('express');
const path = require('path');
const app = express();


console.log(__dirname);
const staticFiles = path.join(__dirname, '/public');

app.set('view engine', 'ejs')

// builtin middleware
app.use(express.static(staticFiles));

app.get('/', (req, res) => {
    res.render('index.ejs');
    // res.send('<h1>Second line</h1>');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});
app.get('/*', (req, res) => {
    res.send('Error Page');
});

const port = 8000;
app.listen(port, () => {
    console.log("Listening on port " + port);
})