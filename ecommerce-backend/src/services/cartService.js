const CartRepository = require('../repositories/cartRepository');

exports.create = async (data) => {
  return await CartRepository.create(data);
};

exports.getAll = async () => {
  return await CartRepository.getAll();
};

exports.getOne = async (id) => {
  return await CartRepository.getOne(id);
};

exports.update = async (id, data) => {
  return await CartRepository.update(id, data);
};

exports.destroy = async (id) => {
  return await CartRepository.destroy(id);
};
