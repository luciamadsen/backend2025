const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController'); // todo en minúsculas

/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: Operaciones relacionadas con tickets
 */

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     summary: Obtener todos los tickets
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: Lista de tickets obtenida con éxito
 */
router.get('/', ticketController.getTickets);

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     summary: Obtener un ticket por ID
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del ticket
 *     responses:
 *       200:
 *         description: Ticket obtenido con éxito
 */
router.get('/:id', ticketController.getTicketById);

/**
 * @swagger
 * /api/tickets:
 *   post:
 *     summary: Crear un nuevo ticket
 *     tags: [Tickets]
 *     responses:
 *       201:
 *         description: Ticket creado con éxito
 */
router.post('/', ticketController.createTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     summary: Actualizar un ticket
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del ticket
 *     responses:
 *       200:
 *         description: Ticket actualizado con éxito
 */
router.put('/:id', ticketController.updateTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     summary: Eliminar un ticket
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del ticket
 *     responses:
 *       200:
 *         description: Ticket eliminado con éxito
 */
router.delete('/:id', ticketController.deleteTicket);

module.exports = router;

