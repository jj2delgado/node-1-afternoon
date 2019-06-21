const products = require('../products.json')


const getProduct = (req, res) => {
    let {id} = req.params

    product = (products.find(product => +product.id === +id))
    if(!product){
        res.status(500).send('Item not in list')
    }
    res.status(200).send(product)
}

module.exports ={
    getProduct
}