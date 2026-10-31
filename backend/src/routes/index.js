const express = require('express');
const router = express.Router();
const authRoutes = require('../modules/auth/auth.routes');
const projectRoutes = require('../modules/projects/project.routes');
const adminProjectRoutes = require('../modules/projects/admin.project.routes');

router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/admin/projects', adminProjectRoutes);

module.exports = router;
