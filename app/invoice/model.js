const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const invoiceSchema = Schema(
  {
    sub_total: {
      type: Number,
      required: [true, 'sub_total harus diisi'],
    },
    delivery_fee: {
      type: Number,
      required: [true, 'delivery_fee harus diisi'],
    },
    delivery_address: {
      provinsi: { type: String, required: 'provinsi harus diisi.' },
      kabupaten: { type: String, required: 'kabupaten harus diisi.' },
      kecamatan: { type: String, required: 'kecamatan harus diisi.' },
      kelurahan: { type: String, required: 'kelurahan harus diisi.' },
      detail: { type: String },
    },
    total: {
      type: Number,
      required: [true, 'total harus diisi'],
    },
    payment_status: {
      type: String,
      enum: ['waiting_payment', 'paid'],
    },

    user: {
      type: Schema.Types.ObjectId,
      req: 'User',
    },
    order: {
      type: Schema.Types.ObjectId,
      req: 'Order',
    },
  },
  { timestamps: true }
);

module.exports = model('Invoice', invoiceSchema);
