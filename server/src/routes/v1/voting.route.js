const express = require('express');
const validate = require('../../middlewares/validate');
const votingValidation = require('../../validations/voting.validation');
const votingController = require('../../controllers/votinig.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(votingValidation.vote), votingController.vote)
  .get(votingController.voteCount);

router
  .route('/scan')
  .post(validate(votingValidation.scanQr), votingController.scanQr)

module.exports = router;
