// const express = require('express');
// const router = express.Router();

// const { ensureAuth } = require('../middleware/auth');
// const { ensurePostOwner } = require('../middleware/ensurePostOwner');
// const { validatePost } = require('../middleware/validatePost');
// const itemController = require('../controllers/postControllers');

// router.get(
//     '/', 
//     itemController.getAllPosts);
// router.get(
//     '/:id', 
//     itemController.getPostById);
// router.post(
//     '/', 
//     ensureAuth, 
//     validatePost, 
//     itemController.createPost);
// router.put(
//     '/:id', 
//     ensureAuth, 
//     ensurePostOwner, 
//     validatePost, 
//     itemController.updatePost);
// router.delete(
//     '/:id', 
//     ensureAuth, 
//     ensurePostOwner, 
//     itemController.deletePost);
// router.patch(
//     '/:id/status', 
//     ensureAuth, 
//     ensurePostOwner, 
//     itemController.updateStatus);

// module.exports = router;