const express = require('express');
const router = express.Router();
const client = require('../libs/connect')()

client;



router.get('/', (req, res) => {
    res.render("menu");
})

router.get('/producto', (req, res) => {
    res.render("product")
})
    
module.exports = router; 