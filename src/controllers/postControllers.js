const Item = require('../models/Post');

const getAllPosts = async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server errlr' });
    }
};

const getPostById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const createPost = async (req, res) => {
     try {
        const newItem = await Item.create({
            ...req.body, 
            userId: req.user._id, 
            status: req.body.status || 'open'
        });
        res.status(201).json(newItem);
     } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
     }
};

const updatePost = async (req, res) => {
    try {
        const item = req.item; //loads the middleware

        item.title = req.body.title;
        item.description = req.body.description;
        item.type = req.body.type;
        item.category = req.body.category;
        item.imgageUrl = req.body.imageUrl;
        item.location = req.body.location;
        item.eventDate = req.body.eventDate;
        item.status = req.body.status; 

        await item.save();

        res.json(item);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const deletePost = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        if (String(item.userId) !== String(req.user._id)) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        await Item.findByIdAndDelete(req.params.id);

        res.json({ message: 'Item deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const item = await Item.findById(req.params.id);

        if(!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        item.status = status;
        await item.save();

        res.json(item);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAllPosts, 
    getPostById, 
    createPost, 
    updatePost, 
    deletePost,
    updateStatus
}