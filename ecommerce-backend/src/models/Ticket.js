const { Schema, model } = require('mongoose');

const ticketSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
      {
        productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

module.exports = model('Ticket', ticketSchema);
