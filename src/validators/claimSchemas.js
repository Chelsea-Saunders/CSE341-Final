const Joi = require('joi');

const claimSchema = Joi.object({
    message: Joi.string().required(),
});

const claimStatusSchema = Joi.object({
    status: Joi.string().valid('pending', 'approved', 'rejected').required(),
});

module.exports = {
    claimSchema, 
    claimStatusSchema 
}