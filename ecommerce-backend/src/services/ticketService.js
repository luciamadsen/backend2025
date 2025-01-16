const TicketRepository = require('../repositories/ticketRepository');

exports.create = async (data) => TicketRepository.create(data);
exports.getAll = async () => TicketRepository.getAll();
exports.getOne = async (id) => TicketRepository.getOne(id);
exports.update = async (id, data) => TicketRepository.update(id, data);
exports.destroy = async (id) => TicketRepository.destroy(id);
