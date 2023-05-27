const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createVoteToken = {
    body: Joi.object().keys({
        token_id: Joi.string().required(),
        token: Joi.string().required(),
        hasVoted: Joi.boolean(),
        voted_projects: Joi.array().items(Joi.string().custom(objectId)).max(3),
    }),
};
const getVoteTokens = {
    query: Joi.object().keys({
        token: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};
module.exports = {
    createVoteToken,
    getVoteTokens,
};
