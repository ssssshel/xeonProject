const express = require('express');
const Product = require('../../models/product');
const router = express.Router();
const client = require('../libs/connect')()

client;


// router.get('/:marca', async(req, res) => {
//   const marca = req.params.marca;
//   try {
//     const arrayProductsDB = await Product.find({ marca: marca });
//     res.render("menumarca", {
//       arrayProductsDB
//     })
//   } catch (error) {
//     console.log(error)
//   }
// })
// router.get('/:tipo/:marca', async(req, res) => {
//   const tipo = req.params.tipo;
//   const marca = req.params.marca;
//   try {
//     const arrayProductsDB = await Product.find({ tipo: tipo, marca: marca});
//     res.render("menutipo", {
//       arrayProductsDB
//     })
//   } catch (error) {
//     console.log(error);
//   }
// })


module.exports = router;