const express = require('express');
const router = express.Router();
const projectController = require('./project.controller');

// Public routes
router.get('/', projectController.getProjects);
router.get('/:slug', projectController.getProject);

module.exports = router;
