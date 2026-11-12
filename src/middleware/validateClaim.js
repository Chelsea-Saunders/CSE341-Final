
const { validateRequest } = require('./validateRequest');
const { claimSchema } = require('../Vlaidators/claimSchemas');

const validateClaim = validateRequest(claimSchema);

module.exports = { validateClaim };