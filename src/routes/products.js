const express = require('express');
const Product = require('../../models/product');
const router = express.Router();
const client = require('../libs/connect')()

client;





router.get('/', async(req, res) => {
    try {
        const arrayProductsDB = await Product.find();
        console.log(arrayProductsDB);
        res.render("menu", {
            arrayProductsDB,
            tipoProd: arrayProductsDB.tipo,
        })
    } catch (error) {
        console.log(error);
    }
})

// router.get('/producto', (req, res) => {
//     res.render("product")
// })
    
router.get('/:id', async(req, res) => {
    const id = req.params.id;

    try {
        const productDB = await Product.findOne({ _id:id });
        console.log(productDB);

        res.render("product", {
            product: productDB,
            error: false
        })
        
    } catch (error) {
        console.log(error);

        res.render("product", {
            error: true,
            mensaje: "No se encuentra el producto seleccionado"
        })
    }
})

module.exports = router; 