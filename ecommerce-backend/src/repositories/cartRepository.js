const Cart = require('../models/Cart');

exports.create = async (data) => {
  return await Cart.create(data);
};

exports.getAll = async () => {
  return await Cart.find().populate('items.productId');
};

exports.getOne = async (id) => {
  return await Cart.findById(id).populate('items.productId');
};

exports.update = async (id, data) => {
  return await Cart.findByIdAndUpdate(id, data, { new: true });
};

exports.destroy = async (id) => {
  const cart = await Cart.findById(id);
  if (cart) {
    await cart.remove();
    return true;
  }
  return false;
};
