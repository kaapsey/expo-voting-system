const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { voteTokenService } = require('../services');
const pick = require('../utils/pick');
const { VoteToken, Project } = require('../models');
const ApiError = require('../utils/ApiError');

const scanQr = catchAsync(async (req, res) => {
  const vote_token = await VoteToken.findOne({ token_id: req.body.token_id });

  if(!vote_token){
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid token');
  }

  if(vote_token.hasVoted) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Token has already voted');
  }

  res.status(httpStatus.OK).send({ message: 'Token is valid' });
});

const vote = catchAsync(async (req, res) => {
  const vote_token = await VoteToken.findOne({ token_id: req.body.token_id });

  if(!vote_token){
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid token');
  }

  if(vote_token.hasVoted) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Token has already voted');
  }

  vote_token.hasVoted = true;

  for (let index = 0; index < req.body.project_id.length; index++) {
    const id = req.body.project_id[index];
    const project = await Project.findById(id);
    if(!project){
      throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid project id');
    }

    vote_token.voted_projects.push(id);
    project.vote_count += 1;

    await project.save();
  }

  await vote_token.save();

  res.status(httpStatus.OK).send({ message: 'Vote successful' });
});

const voteCount = catchAsync(async (req, res) => {
  const projects = await Project.find({});
  let totalCount = 0;

  for (let index = 0; index < projects.length; index++) {
    const project = projects[index];
    totalCount += project.vote_count;
  }

  res.status(httpStatus.OK).send({ totalCount });
});

module.exports = {
  scanQr,
  vote,
  voteCount,
};
