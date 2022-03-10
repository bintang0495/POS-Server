const { Schema, model } = require('mongoose');
const deliveryAddressSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama alamat harus diisi'],
      maxlength: [255, 'Panjang maksimal nama alamat adalah 255 karakter'],
    },
    kelurahan: {
      type: String,
      required: [true, 'Kelurahan harus diisi'],
      maxlength: [255, 'Panjang maksimal nama kelurahan adalah 255 karakter'],
    },
    kecamatan: {
      type: String,
      required: [true, 'Kecamatan harus diisi'],
      maxlength: [255, 'Panjang nama kecamatan adalah 255 karakter'],
    },
    kabupaten: {
      type: String,
      required: [true, 'Kabupaten harus diisi'],
      maxlength: [255, 'Panjang nama kabupaten adalah 255 karakter'],
    },
    provinsi: {
      type: String,
      required: [true, 'Provinsi harus diisi'],
      maxlength: [255, 'Panjang nama provinsi adalah 255 karakter'],
    },
    detail: {
      type: String,
      required: [true, 'Detail alamat harus diisi'],
      maxlength: [1000, 'Panjang nama detail adalah 1000 karakter'],
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = model('DeliveryAddress', deliveryAddressSchema);
