const express = require('express');
const { getUsers, deleteInactiveUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/', getUsers);
router.delete('/', deleteInactiveUsers);

module.exports = router;
