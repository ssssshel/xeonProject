const express = require('express');
const Product = require('../../models/product');
const router = express.Router();
const client = require('../libs/connect')()

router.get('/', async(req, res) => {
  res.render('shopping');
})

module.exports = router;