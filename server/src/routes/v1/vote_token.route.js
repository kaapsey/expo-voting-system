const express = require('express');
const validate = require('../../middlewares/validate');
const vote_tokenValidation = require('../../validations/vote_token.validation');
const vote_tokenController = require('../../controllers/vote_token.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(vote_tokenValidation.createVoteToken), vote_tokenController.createVoteToken)
  .get(validate(vote_tokenValidation.getVoteTokens), vote_tokenController.getVoteTokens);

module.exports = router;
