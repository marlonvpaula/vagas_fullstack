var express = require('express');
var router = express.Router();
  
router.get ('/api', (req, res) => { 
    res.json ({mensagem: 'Bem-vindo ao servidor'}); 
});


module.exports = router;
  