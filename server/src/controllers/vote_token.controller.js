const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { voteTokenService } = require('../services');
const pick = require('../utils/pick');

const createVoteToken = catchAsync(async (req, res) => {
  const vote_token = await voteTokenService.createVoteToken(req.body);
  res.status(httpStatus.CREATED).send(vote_token);
});

const getVoteTokens = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['token']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await voteTokenService.queryVoteTokens(filter, options);
    res.send(result);
  });

module.exports = {
  createVoteToken,
    getVoteTokens,
};
