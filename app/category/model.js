const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const categorySchema = Schema({
  name: {
    type: String,
    minlength: [3, 'Panjang nama kategori minimal dari 3 karakter'],
    maxlength: [20, 'Panjang nama kategori maksimal 20 karakter'],
    required: [true, 'Nama kategori harus diisi'],
  },
});

module.exports = model('Category', categorySchema);
