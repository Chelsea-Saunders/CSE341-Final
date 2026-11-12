// const express = require('express');
// const router = express.Router();

// const { ensureAuth } = require('../middleware/auth');
// const { ensureClaimOwner } = require('../middleware/ensureClaimOwner');
// const { ensureItemOwnerOrAdmin } = require('../middleware/ensureItemOwnerOrAdmin');
// const claimController = require('../controllers/claimControllers');

// router.get('/', ensureAuth, claimController.getAllClaims);
// router.get('/:id', ensureAuth, claimController.getClaimById);
// router.put('/:id', ensureAuth, ensureClaimOwner, claimController.updateClaim);
// router.delete('./:id', ensureAuth, ensureClaimOwner, claimController.deleteClaim);
// router.patch('/:id/status', ensureAuth, ensureItemOwnerOrAdmin, claimController.updateClaimStatus);
// // 
// module.exports = router;