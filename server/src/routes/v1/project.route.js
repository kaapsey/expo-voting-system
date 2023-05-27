const express = require('express');
const validate = require('../../middlewares/validate');
const projectValidation = require('../../validations/project.validation');
const projectController = require('../../controllers/project.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(projectValidation.createProject), projectController.createProject)
  .get(validate(projectValidation.getProjects), projectController.getProjects);

router
  .route('/:projectId')
  .get(validate(projectValidation.getProject), projectController.getProject)
  .patch(validate(projectValidation.updateProject), projectController.updateProject)
  .delete(validate(projectValidation.deleteProject), projectController.deleteProject);

module.exports = router;
