const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

ejs.delimiter = '?';

const port = process.env.PORT || 8080;
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res)=> { res.render('index')});


app.listen(port, () => {
    console.log(`Server us listening on port: ${port}`);
});