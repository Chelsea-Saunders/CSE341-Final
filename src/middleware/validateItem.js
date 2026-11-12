const { validateRequest } = require('./validateRequest');
const { itemSchema } = require('../validators/itemSchemas');

const validateItem = validateRequest(itemSchema);

module.exports = { validateItem };