const router = require('express').Router();
const multer = require('multer');
const os = require('os');
const { policyValidation } = require('../../middlewares/index');

const productController = require('./controller');

router.post(
  '/products',
  multer({ dest: os.tmpdir() }).single('image'),
  policyValidation('create', 'Product'),
  productController.store
);
router.put(
  '/products/:id',
  multer({ dest: os.tmpdir() }).single('image'),
  policyValidation('update', 'Product'),
  productController.update
);

router.delete(
  '/products/:id',
  policyValidation('delete', 'Product'),
  productController.destroy
);

router.get('/products', productController.index);
module.exports = router;
