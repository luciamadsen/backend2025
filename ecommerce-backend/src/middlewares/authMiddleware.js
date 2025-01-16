const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwtConfig');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Token no proporcionado' });

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token inválido' });
    req.userId = decoded.id;
    req.role = decoded.role; // Incluye el rol en el token
    next();
  });
};

exports.isPremium = (req, res, next) => {
  if (req.role !== 'premium') {
    return res.status(403).json({ message: 'Acceso restringido a usuarios premium' });
  }
  next();
};
