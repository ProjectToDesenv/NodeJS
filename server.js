const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect("mongodb://mongodbapp.appdev.sanesul.ms.gov.br:27017/mongodbapp");

requireDir("./src/models");

const Product = mongoose.model('Product');

/*app.get('/',(req,res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native',
        url: 'http://teste'

    });
});*/

// Primeira Rota
app.use('/api',require('./src/routes'));

app.listen(3001);