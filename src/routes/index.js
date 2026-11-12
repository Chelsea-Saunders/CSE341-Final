const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const claimRoutes = require('./claimRoutes');
const adminRoutes = require('./adminRoutes');
const itemRoutes = require('./itemRoutes');
const messageRoutes = require('./messageRoutes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/claims', claimRoutes);
router.use('/admin', adminRoutes);
router.use('/item', itemRoutes);
router.use('/messages', messageRoutes);

module.exports = router;