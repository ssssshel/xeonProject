const express = require('express');
const router = express.Router();

router.get('/insertData', (req, res) => {
    res.render("insertData");
})

module.exports = router;