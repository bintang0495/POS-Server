const router = require('express').Router();
const { policyValidation } = require('../../middlewares');
const tagController = require('./controller');

router.post('/tags', policyValidation('create', 'Tag'), tagController.store);
router.put(
  '/tags/:id',
  policyValidation('update', 'Tag'),
  tagController.update
);
router.delete(
  '/tags/:id',
  policyValidation('delete', 'Tag'),
  tagController.destroy
);
router.get('/tags', tagController.index);
router.get('/tags/:category', tagController.showTagByCategory);

module.exports = router;
