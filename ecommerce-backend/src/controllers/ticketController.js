const Ticket = require('../models/Ticket');

const ticketController = {
  createTicket: async (req, res) => {
    try {
      const ticket = new Ticket(req.body);
      await ticket.save();
      res.status(201).json(ticket);
    } catch (err) {
      res.status(500).json({ error: 'Error creando el ticket', details: err.message });
    }
  },
  getTickets: async (req, res) => {
    try {
      const tickets = await Ticket.find();
      res.status(200).json(tickets);
    } catch (err) {
      res.status(500).json({ error: 'Error obteniendo tickets', details: err.message });
    }
  },
  getTicketById: async (req, res) => {
    try {
      const ticket = await Ticket.findById(req.params.id);
      if (!ticket) return res.status(404).json({ error: 'Ticket no encontrado' });
      res.status(200).json(ticket);
    } catch (err) {
      res.status(500).json({ error: 'Error obteniendo el ticket', details: err.message });
    }
  },
  updateTicket: async (req, res) => {
    try {
      const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!ticket) return res.status(404).json({ error: 'Ticket no encontrado' });
      res.status(200).json(ticket);
    } catch (err) {
      res.status(500).json({ error: 'Error actualizando el ticket', details: err.message });
    }
  },
  deleteTicket: async (req, res) => {
    try {
      const ticket = await Ticket.findByIdAndDelete(req.params.id);
      if (!ticket) return res.status(404).json({ error: 'Ticket no encontrado' });
      res.status(200).json({ message: 'Ticket eliminado con éxito' });
    } catch (err) {
      res.status(500).json({ error: 'Error eliminando el ticket', details: err.message });
    }
  },
};

module.exports = ticketController;
