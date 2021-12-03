const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render("index");
})

// router.get('/cesta', (req, res) => {
//     res.render("shopping")
// })



module.exports = router;