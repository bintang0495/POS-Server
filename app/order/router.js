const router = require('express').Router();
const { policyValidation } = require('../../middlewares');
const orderController = require('./controller');

router.post(
  '/orders',
  policyValidation('create', 'Order'),
  orderController.store
);
router.get('/orders', policyValidation('view', 'Order'), orderController.index);

module.exports = router;
