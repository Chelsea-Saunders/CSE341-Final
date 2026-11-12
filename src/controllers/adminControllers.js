// const User = require('../models/User');
// const Claim = require('../models/Claim');
// const Item = require('../models/Item');

// const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find()
//             .sort({ createdAt: -1 })
//             .lean();
//         res.json(users);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// const getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id).lean();

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.json(user);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// const updateUserRole = async (req, res) => {
//     try {
//         const { role } = req.body;

//         const allowedRoles = ['user', 'admin'];

//         if (!allowedRoles.includes(role)) {
//             return res.status(400).json({
//                 message: `Invalid role. Must be one of ${allowedRoles.join(', ')}`
//             });
//         }

//         const user = await User.findById(req.params.id);

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         user.role = role;
//         await user.save();

//         res.json({
//             message: 'User role updated successfully', 
//             user
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// // so admin can reject or approve claims
// const reviewClaim = async (req, res) => {
//     try {
//         const { status , reviewNote } = req.body;

//         const allowedStatuses = ['approved', 'rejected'];

//         if (!allowedStatuses.includes(status)) {
//             return res.status(400).json({
//                 message: 'Invalid status. Must be approved first'
//             });
//         }

//         const claim = await Claim.findById(req.params.id);

//         if(!claim) {
//             return res.status(404).json({ message: 'Claim not found ' });
//         }

//         claim.status = status;
//         claim.reviewNote = reviewNote || '';
//         claim.reviewedAt = new Date();

//         await claim.save();

//         // if approved, close the item automatically?? ***OPTIONAL***
//         if (status === 'approved') {
//             const item = await Item.findById(claim.itemId);

//             if (item) {
//                 item.status = 'closed';
//                 await item.save();
//             }
//         }

//         res.json({
//             message: `Claim ${status} successfully`, 
//             claim
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// module.exports = {
//     getAllUsers, 
//     getUserById, 
//     updateUserRole,
//     reviewClaim
// };