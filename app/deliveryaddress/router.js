const router = require('express').Router();
const { policyValidation } = require('../../middlewares');
const deliveryController = require('./controller');

router.post(
  '/delivery-addresses',
  policyValidation('create', 'DeliveryAddress'),
  deliveryController.store
);

router.put('/delivery-addresses/:id', deliveryController.update);

router.get('/delivery-addresses', deliveryController.index);

router.delete(
  '/delivery-addresses/:id',
  policyValidation('delete', 'DeliveryAddress'),
  deliveryController.destroy
);

module.exports = router;
