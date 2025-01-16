const Ticket = require('../models/Ticket');

class TicketDao {
  async create(data) {
    const ticket = new Ticket(data);
    return await ticket.save();
  }

  async findAll() {
    return await Ticket.find();
  }

  async findById(id) {
    return await Ticket.findById(id);
  }

  async updateById(id, data) {
    return await Ticket.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id) {
    return await Ticket.findByIdAndDelete(id);
  }
}

module.exports = new TicketDao();
