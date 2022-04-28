const Tags = require('./model');
const User = require('../user/model');
const Category = require('../category/model');
const Product = require('../product/model');

const store = async (req, res, next) => {
  try {
    let payload = req.body;

    let tag = new Tags(payload);
    await tag.save();
    return res.json(tag);
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }

    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    let payload = req.body;
    let tag = await Tags.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });
    return res.json(tag);
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }

    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    let { id } = req.params;
    let tag = await Tags.findByIdAndDelete(id);
    return res.json(tag);
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }

    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    let tag = await Tags.find().populate('user');
    return res.json(tag);
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }

    next(err);
  }
};

const showTagByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    console.log(category);
    const category_id = await Category.findOne({
      name: { $regex: category, $options: 'i' },
    });

    const products = await Product.find({ category: category_id });
    let tagIds = [];
    products.forEach((product) => {
      product.tags.forEach((tag) => {
        if (!tagIds.includes(tag)) {
          tagIds.push(tag);
        }
      });
    });

    const tags = await Tags.find({ _id: { $in: tagIds } });
    res.json(tags);
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }

    next(err);
  }
};

module.exports = {
  store,
  update,
  destroy,
  index,
  showTagByCategory,
};
