const httpStatus = require('http-status');
const { VoteToken } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a voteToken
 * @param {Object} voteTokenBody
 * @returns {Promise<VoteToken>}
 */
const createVoteToken = async (voteTokenBody) => {
  if (await VoteToken.isVoteTokenTaken(voteTokenBody.token)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Token already taken');
  }
  return VoteToken.create(voteTokenBody);
};

/**
 * Query for voteTokens
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryVoteTokens = async (filter, options) => {
  const voteTokens = await VoteToken.paginate(filter, options);
  return voteTokens;
};

module.exports = {
  createVoteToken,
  queryVoteTokens,
};
