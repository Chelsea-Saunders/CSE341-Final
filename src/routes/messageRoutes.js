// const express = require('express');
// const router = express.Router();

// const { ensureAuth } = require('../middleware/auth');
// const { ensureMessageOwner } = require('../middleware/ensureMessageOwner');
// const messageController = require('../controllers/messageControllers.');

// router.get('/:id', ensureAuth, messageController.getMessageById);
// router.put('/:id', ensureAuth, ensureMessageOwner, messageController.updateMessage);
// router.delete('/:id', ensureAuth, ensureMessageOwner, messageController.deleteMessage);
// router.patch('/:id/read', ensureAuth, messageController.markMessageRead);
// router.get('/claim/:claimId', ensureAuth, messageController.getClaimMessage);
// router.post('/claim/:claimId', ensureAuth, messageController.createMessage);

// module.exports = router;