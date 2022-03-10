const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const tagSchema = Schema({
  name: {
    type: String,
    minlength: [3, 'tag harus minimal 3 karakter'],
    maxlength: [20, 'tag maksimal 20 karakter'],
    required: [true, 'tag harus diisi'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = model('Tag', tagSchema);
