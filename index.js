const express = require('express');
require('dotenv').config();

// Crear servidor de express
const app = express();

//Directorio publico
app.use( express.static('public'));

//rutas
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: eventos

//Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
});