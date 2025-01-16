const userDao = require('../dao/userDao');

const userController = {
  createUser: async (req, res) => {
    try {
      const user = await userDao.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Error creando el usuario', details: err.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await userDao.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: 'Error obteniendo usuarios', details: err.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await userDao.findById(req.params.id);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Error obteniendo el usuario', details: err.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await userDao.updateById(req.params.id, req.body);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Error actualizando el usuario', details: err.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await userDao.deleteById(req.params.id);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.status(200).json({ message: 'Usuario eliminado con éxito' });
    } catch (err) {
      res.status(500).json({ error: 'Error eliminando el usuario', details: err.message });
    }
  },
};

module.exports = userController;
