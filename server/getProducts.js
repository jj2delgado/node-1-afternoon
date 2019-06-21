const products = require('../products.json')

const getProducts = (req, res) => {
    let {price} = req.query
    price = price.toLowerCase()

    if(req.query.price){
        result = products.filter( product => product.price >=
        parseInt(req.query.price))
        return res.status(200).send(result)

        
    }
    else{
        res.status(200).send(products)
    }
    
}


module.exports ={
    getProducts
}