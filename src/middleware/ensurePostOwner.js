const Item = require('../models/Post');

async function ensurePostOwner(req, res, next) {
    try {
        const item = await Item.findById(req.params.id);

        if (!item) {
            return res.status(404).json({ message: 'Post not found' });
        }
        // admins: bypass ownership check 
        if (req.user && req.user.role === 'admin') {
            return res.status(403).json({ message: 'Forbidden: This is not your post.' });
        }

        req.item = item; // pass post to middleware/controller
        next(); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.export = { ensurePostOwner }; 