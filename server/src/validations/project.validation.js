const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProject = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    stall_no: Joi.number().required(),
    cover_image: Joi.string(),
    vote_count: Joi.number(),
    members: Joi.array().items({
      name: Joi.string().required(),
      role: Joi.string().valid('leader', 'member'),
    }),
    college: Joi.string(),
  }),
};

const getProjects = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProject = {
  params: Joi.object().keys({
    projectId: Joi.string().custom(objectId),
  }),
};

const updateProject = {
  params: Joi.object().keys({
    projectId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      description: Joi.string(),
      stall_no: Joi.number(),
      cover_image: Joi.string(),
      vote_count: Joi.number(),
      members: Joi.array().items({
        name: Joi.string().required(),
        role: Joi.string().valid('leader', 'member'),
      }),
    })
    .min(1),
};

const deleteProject = {
  params: Joi.object().keys({
    projectId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
};
