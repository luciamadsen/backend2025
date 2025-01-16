const Ticket = require('../models/Ticket');

exports.create = async (data) => Ticket.create(data);
exports.getAll = async () => Ticket.find().populate('items.productId');
exports.getOne = async (id) => Ticket.findById(id).populate('items.productId');
exports.update = async (id, data) => Ticket.findByIdAndUpdate(id, data, { new: true });
exports.destroy = async (id) => {
  const ticket = await Ticket.findById(id);
  if (ticket) {
    await ticket.remove();
    return true;
  }
  return false;
};
