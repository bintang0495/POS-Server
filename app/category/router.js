const router = require('express').Router();
const categoryController = require('./controller');
const { policyValidation } = require('../../middlewares/index');

router.get('/categories', categoryController.index);
router.post(
  '/categories',
  policyValidation('create', 'Category'),
  categoryController.store
);
router.put(
  '/categories/:id',
  policyValidation('update', 'Category'),
  categoryController.update
);
router.delete(
  '/categories/:id',
  policyValidation('delete', 'Category'),
  categoryController.destroy
);

module.exports = router;
