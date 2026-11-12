const express = require('express');
const router = express.Router();

const { ensureAuth, ensureAdmin } = require('../middleware/auth');
const adminController = require('../controllers/adminControllers');

router.get('/users', ensureAuth, ensureAdmin, 
    adminController.getAllPosts);

router.get('/users/:id', ensureAuth, ensureAdmin, 
    adminController.getItemById);

router.patch('/users/:id/role', ensureAuth, ensureAdmin, 
    adminController.updateUserRole);

router.patch('/users/:id/status', ensureAuth, ensureAdmin, 
    adminController.reviewClaim);

module.exports = router;