const cartDao = require('../dao/cartDao');

const cartController = {
  createCart: async (req, res) => {
    try {
      const cart = await cartDao.create(req.body);
      res.status(201).json(cart);
    } catch (err) {
      res.status(500).json({ error: 'Error creando el carrito', details: err.message });
    }
  },
  getCarts: async (req, res) => {
    try {
      const carts = await cartDao.findAll();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json({ error: 'Error obteniendo carritos', details: err.message });
    }
  },
  getCartById: async (req, res) => {
    try {
      const cart = await cartDao.findById(req.params.id);
      if (!cart) return res.status(404).json({ error: 'Carrito no encontrado' });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json({ error: 'Error obteniendo el carrito', details: err.message });
    }
  },
  updateCart: async (req, res) => {
    try {
      const cart = await cartDao.updateById(req.params.id, req.body);
      if (!cart) return res.status(404).json({ error: 'Carrito no encontrado' });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json({ error: 'Error actualizando el carrito', details: err.message });
    }
  },
  deleteCart: async (req, res) => {
    try {
      const cart = await cartDao.deleteById(req.params.id);
      if (!cart) return res.status(404).json({ error: 'Carrito no encontrado' });
      res.status(200).json({ message: 'Carrito eliminado con éxito' });
    } catch (err) {
      res.status(500).json({ error: 'Error eliminando el carrito', details: err.message });
    }
  },
};

module.exports = cartController;
