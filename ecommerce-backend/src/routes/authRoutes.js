const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const { verifyToken, isPremium } = require('../middleware/authMiddleware');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

router.post('/signout', verifyToken, AuthController.signout);

router.post('/reset', AuthController.resetPassword);

router.put('/premium/:id', verifyToken, AuthController.setPremium);

router.get('/premium-content', verifyToken, isPremium, (req, res) => {
    res.status(200).json({ message: 'Bienvenido al contenido premium' });
  });


module.exports = router;
