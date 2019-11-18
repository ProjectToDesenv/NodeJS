const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
routes.get('/products',ProductController.index);
routes.post('/products')

/*routes.get('/products',(req,res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native',
        url: 'http://teste'

    });
 return res.send('Hello world!')
});*/

/*routes.get('/products',(req,res) => {
   
 return res.send('Hello world!')
});*/

module.exports = routes;