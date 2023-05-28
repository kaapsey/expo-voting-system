const Joi = require('joi');

const scanQr = {
    body: Joi.object().keys({
        token_id: Joi.string().required(),
    }),
};
const vote = {
  body: Joi.object().keys({
      token_id: Joi.string().required(),
      project_id: Joi.array().required(),
  }),
};
module.exports = {
    scanQr,
    vote,
};
