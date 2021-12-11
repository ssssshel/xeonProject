const express = require('express');
const Product = require('../../models/product');
const router = express.Router();
const client = require('../libs/connect')()


client;

// MENU Y FILTROS

router.get('/', async(req, res) => {
    try {
        const arrayProductsDB = await Product.find({});
        console.log(arrayProductsDB);
        res.render("menu", {
            arrayProductsDB,

        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/tipo/:tipo', async(req, res) => {
  const tipo = req.params.tipo;
  try {
    const arrayProductsDB = await Product.find({ tipo: tipo});
    res.render("menutipo", {
      arrayProductsDB
    })
  } catch (error) {
    console.log(error)
  }
})


router.get('/marca/:marca', async(req, res) => {
  const marca = req.params.marca;
  try {
    const arrayProductsDB = await Product.find({ marca: marca });
    res.render("menumarca", {
      arrayProductsDB
    })
  } catch (error) {
    console.log(error)
  }
})


// PRODUCTO INDIVIDUAL POR FILTRO


router.get('/producto/:id', async(req, res) => {
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

router.get('/producto/:tipo/:id', async(req, res) => {
  const id = req.params.id;
  const tipo = req.params.tipo;
  try {
      const productDB = await Product.findOne({ _id:id, tipo: tipo});
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

router.get('/product/:marca/:id', async(req, res) => {
  const id = req.params.id;
  const marca = req.params.marca;
  try {
      const productDB = await Product.findOne({ _id:id, marca: marca});
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