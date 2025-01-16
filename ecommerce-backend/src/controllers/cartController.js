const CartService = require('../services/cartService');

exports.createCart = async (req, res) => {
  try {
    const cart = await CartService.create(req.body);
    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCarts = async (req, res) => {
  try {
    const carts = await CartService.getAll();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCartById = async (req, res) => {
  try {
    const cart = await CartService.getOne(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const cart = await CartService.update(req.params.id, req.body);
    if (!cart) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const result = await CartService.destroy(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }
    res.status(200).json({ message: 'Carrito eliminado con éxito' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
