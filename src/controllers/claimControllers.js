
// const Claim = require('../models/Claim');
// const Item = require('../models/Item');

// const createClaim = async (req, res) => {
//     try {
//         const newClaim = await Claim.create({
//             itemId: req.params.id, 
//             userId: req.user._id, 
//             proof: req.body.proof,
//             status: 'pending'
//         });
//         res.status(201).json(newClaim);
//     } catch (err) {
//         console.error(err)
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// const getAllClaims = async (req, res) => {
//     try {
//         const claims = await Claim.find()
//             .sort({ createdAt: -1 })
//             .lean();

//         res.json(claims);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// const getClaimById = async (req, res) => {
//     try {
//         const claims = await Item.findById(req.params.id);

//         if (!claims) {
//             return res.status(404).json({ message: 'Claim not found' });
//         }
//         res.json(claims);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// const getItemClaims = async (req, res) => {
//     try {
//         const claim = await Claim.find({ itemId: req.params.id })
//             .sort({ createdAt: -1 })
//             .lean();

//         res.json(claim);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// const updateClaim = async (req, res) => {
//     try {
//         const claim = await Claim.findNyId(req.params.id);

//         if (!claim) {
//             return res.status(40).jsoin({ message: 'Claim not found' });
//         }

//         if (String(claim.userId) !== String(req.user._id)) {
//             return res.status(403).json({ message: 'Forbidden' });
//         }

//         if (claim.status !== 'pending') {
//             return res.stauts(400).json({ message: 'Only pending claims can be updated' });
//         }

//         claim.proof = req.body.proof;
//         await claim.save();

//         res.json(claim);

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ messge: 'Server error' });
//     }
// };

// const deleteClaim = async (req, res) => {
//     try {
//         const claim = await Claim.findById(req.params.id);

//         if(!claim) {
//             return res.status(404).json({ message: 'Claim not found' });
//         }

//         if (String(claim.claimId) !== String(req.user._id)) {
//             return res.status (403).json({ message: 'Forbidden' });
//         }

//         if (claim.status !== 'pending') {
//             return res.status(400).json({ message: 'Only pending claims can be withdrawn' });
//         }

//         claim.status = 'withdrawn';
//         await claim.save();

//         res.json({ message: 'Claim withdrawn', claim });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// const updateClaimStatus = async (req, res) => {
//     try {
//         const { status, reviewNote } = req.body;

//         const allowedStatuses = ['approved', 'rejected'];

//         if (!allowedStatuses.includes(status)) {
//             return res.status(400).json({ 
//                 message: 'Invalid status. Must be approved or rejected' });
//         }

//         const claim = await Claim.findById(req.params.id);

//         if (!claim) {
//             return res.status(404).json({ message: 'Claim not found' });
//         }

//         const item = await Item.foundById(claim.itemId);

//         if (!item) {
//             return res.status(404).json({ message: 'Item not found' });
//         }

//         const isOwner = String(item.userId) === String(req.user._id);
//         const isAdmin = req.user && req.user.role === 'admin';

//         if (!isOwner && !isAdmin) {
//             return res.status(403).json({ message: 'Forbidden' });
//         }

//         claim.status = status;
//         claim.reviewNote = reviewNote || '';
//         claim.reviewedAt = new Date()

//         await claim.save();

//         res.json(claim);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// module.exports = {
//     createClaim, 
//     getAllClaims, 
//     getClaimById, 
//     getItemClaims, 
//     updateClaim, 
//     deleteClaim, 
//     updateClaimStatus
// };