const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { secret, expiresIn } = require('../config/jwtConfig');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: 'Usuario registrado exitosamente', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, secret, { expiresIn });
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.signout = (req, res) => {
  res.status(200).json({ message: 'Sesión cerrada exitosamente' });
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    user.password = newPassword;
    await user.save();
    res.status(200).json({ message: 'Contraseña restablecida exitosamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.setPremium = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    user.role = 'premium';
    await user.save();
    res.status(200).json({ message: 'Usuario actualizado a premium', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
