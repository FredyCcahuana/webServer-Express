const express = require('express');
const app = express();
const hbs = require('hbs');
//solo importar
require('./hbs/helpers');

//puerto que te dara keroku
const port = process.env.PORT || 3000;

//MIDDLEWARE: una instruccion con un callback que se ba ejecutar, 
//no importa simpre y no importa que url le pongas
//sera de dominio publico y cualquier persona podra verlo
app.use(express.static(__dirname + '/public'));

//express  handlebars.js (hbs)
//__dirname : path de la direccion hasta donde esta y luego concatena lo sgte
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

//helps: funcion que se dispara cuando una funcion lo requiere

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'fredy ccahUana'
    });
});
app.get('/about', (req, res) => {

    res.render('about');
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);

});