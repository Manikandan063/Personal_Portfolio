const express = require('express');
const router = express.Router();
const projectController = require('../projects/project.controller');
const { protect } = require('../../middleware/authMiddleware');
const validate = require('../../middleware/validateMiddleware');
const { projectSchema } = require('../projects/project.schema');

router.use(protect);

router.get('/', projectController.getAdminProjects);
router.post('/', validate(projectSchema), projectController.createProject);
router.put('/:id', validate(projectSchema), projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
