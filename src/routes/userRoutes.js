const express = require('express');
const router = express.Router();

const { ensureAuth, ensureAdmin } = require('../middleware/auth');
const userController = require('../controllers/userControllers');

router.get('/', ensureAuth, ensureAdmin, userController.getAllUsers);
router.get('/:id', ensureAuth, userController.getUserById);
router.patch('/:id/role', ensureAuth, ensureAdmin, userController.updateUserRole);

module.exports = router;