const Cart = require('../models/Cart');

class CartDao {
  async create(data) {
    const cart = new Cart(data);
    return await cart.save();
  }

  async findAll() {
    return await Cart.find();
  }

  async findById(id) {
    return await Cart.findById(id);
  }

  async updateById(id, data) {
    return await Cart.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id) {
    return await Cart.findByIdAndDelete(id);
  }
}

module.exports = new CartDao();
