const { policyValidation } = require('../../middlewares');
const cartController = require('./controller');
const router = require('express').Router();

router.put('/carts', policyValidation('update', 'Cart'), cartController.update);
router.put('/carts', policyValidation('read', 'Cart'), cartController.index);

module.exports = router;
