//Configurações iniciais
const express = require('express');
const { json } = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();

const personRoute = require('./routes/personRoutes');

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use('/person', personRoute);

const DB_USER = 'henrique';
const DB_PASSWORD = encodeURIComponent('gtcanime301');

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.knlehip.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log("Banco de dados conectado porta:3000")
    app.listen(3000)
}).catch((err) => console.log("Erro na conexão: " + err))

