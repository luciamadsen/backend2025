const User = require('../models/User');
const { sendEmail } = require('../utils/email');

const getUsers = async (req, res) => {
  const users = await User.find().select('name email role');
  res.json(users);
};

const deleteInactiveUsers = async (req, res) => {
  const cutoffDate = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000); // Usuarios inactivos por 2 días
  const usersToDelete = await User.find({ lastConnection: { $lt: cutoffDate } });

  for (const user of usersToDelete) {
    await sendEmail(user.email, 'Cuenta eliminada', 'Tu cuenta fue eliminada por inactividad.');
    await User.deleteOne({ _id: user._id });
  }

  res.json({ message: 'Usuarios inactivos eliminados', count: usersToDelete.length });
};

module.exports = { getUsers, deleteInactiveUsers };
