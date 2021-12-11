const express = require('express');
const bodyParser =  require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

require('dotenv').config();

const port = 3000;

//definimos motor de plantillas y ubicación de estas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//definimos carpeta public
app.use(express.static(__dirname + ('/public')));

//RUTAS
app.use('/', require('./routes/index'));
app.use('/menu', require('./routes/products'));
app.use('/cesta', require('./routes/shoppingCart'));
app.use('/soporte', require('./routes/support'));
app.use('/users', require('./routes/users'))
// app.use('/insertData', require('./routes/devFunctions'));


app.listen(port, () =>{
    console.log("Server running", port)
})