var express = require('express');
var router = express.Router();

const controller = require('../controllers/stores-controller')

router.get ('/', controller.getAll);
router.post ('/', controller.post);
router.put ('/:storeid', controller.update);
router.delete ('/:storeid', controller.remove);

module.exports = router;