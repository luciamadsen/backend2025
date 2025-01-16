const Product = require('../models/Product');

exports.create = async (data) => {
  return await Product.create(data);
};

exports.getAll = async () => {
  return await Product.find();
};

exports.getOne = async (id) => {
  return await Product.findById(id);
};

exports.update = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

exports.destroy = async (id) => {
  const product = await Product.findById(id);
  if (product) {
    await product.remove();
    return true;
  }
  return false;
};
