const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express()
const port = 5000

app.get('/api/products', getProducts.getProducts)
app.get('/api/products/:id', getProduct.getProduct)

app.listen(port, () => {
    console.log('live on port ', port)
})
