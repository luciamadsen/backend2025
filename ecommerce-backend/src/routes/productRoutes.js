const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productsController');

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene todos los productos
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/', ProductController.getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto obtenido
 */
router.get('/:id', ProductController.getProductById);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crea un nuevo producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 */
router.post('/', ProductController.createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Actualiza un producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto actualizado
 */
router.put('/:id', ProductController.updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Elimina un producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado con éxito
 */
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
