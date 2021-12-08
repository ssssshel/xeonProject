const express = require('express');
const router = express.Router();

router.get('/contactanos', (req, res) => {
  res.render('contactUs');
})

module.exports = router;