const express = require('express');
const router = express.Router();

router.get('/newsletter', (req, res) => {
  res.render('newsletter')
})

module.exports = router