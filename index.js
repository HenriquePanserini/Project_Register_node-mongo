//Configurações iniciais
const express = require('express');
const { json } = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();

const DB_USER = 'henrique';
const DB_PASSWORD = encodeURIComponent('gtcanime301');

const person = require('./models/person')

app.use(
    express.urlencoded({
        extended: true
    }),
);

app.use(express.json());

app.post("/person", async(req, res) => {
    //req.body
    const {name, salary, approved} = req.body;

});

app.get("/", function(req, res, next){
    res.json({message: "Oi express!"})
});

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.knlehip.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log("Banco de dados conectado porta:3000")
    app.listen(3000)
}).catch((err) => console.log("Erro na conexão: " + err))

