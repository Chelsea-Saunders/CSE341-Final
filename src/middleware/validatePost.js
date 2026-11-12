function validatePost(req, res, next) {
    const { title, description, type, category, location, eventDate } = 
        req.body;

    if (!title || !description || !type || !category || !location || !eventDate) {
        return res.status(400).json({
            message: 'Title, description, type, category, location, and event date  are required'
        });
    }
    next();
}

module.exports = { validatePost };