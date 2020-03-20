var express = require('express');
var router = express.Router();

const controller = require('../controllers/products-controller')

router.get ('/', controller.getAll);
router.post ('/', controller.post);
router.put ('/:productId', controller.update);
router.delete ('/:productId', controller.remove);

module.exports = router;