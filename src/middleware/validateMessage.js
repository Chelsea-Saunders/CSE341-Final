
const { validateRequest } = require('./validateRequest');

const validateMessage = validateRequest(messageSchema);

module.exports = { validateMessage };