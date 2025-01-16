const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController');

/**
 * @swagger
 * /api/carts:
 *   get:
 *     summary: Obtener todos los carritos
 *     tags:
 *       - Carts
 *     responses:
 *       200:
 *         description: Lista de carritos obtenida con éxito.
 */
router.get('/', (req, res) => {
  res.send('Lista de carritos');
});

module.exports = router;

