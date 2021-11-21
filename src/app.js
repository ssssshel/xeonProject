const express = require('express');

const app = express();

const port = 3000;

//definimos motor de plantillas y ubicación de estas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//definimos carpeta public
app.use(express.static(__dirname + ('/public')));

//RUTAS
app.use('/', require('./routes/index'));

app.listen(port, () =>{
    console.log("Server running", port)
})