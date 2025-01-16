const ProductRepository = require('../repositories/productRepository');

exports.create = async (data) => {
  return await ProductRepository.create(data);
};

exports.getAll = async () => {
  return await ProductRepository.getAll();
};

exports.getOne = async (id) => {
  return await ProductRepository.getOne(id);
};

exports.update = async (id, data) => {
  return await ProductRepository.update(id, data);
};

exports.destroy = async (id) => {
  return await ProductRepository.destroy(id);
};
