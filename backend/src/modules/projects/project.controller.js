const projectService = require('./project.service');

const getProjects = async (req, res, next) => {
  try {
    // Check if the route is accessed by an admin (would have req.admin from protect middleware)
    // Actually, for a single generic GET /projects, it might be public.
    // If we want admin to see drafts, we might need a separate GET /admin/projects route.
    // We'll just pass false for now on the public one.
    const isAdmin = false; 
    const projects = await projectService.getAllProjects(isAdmin);
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
};

const getAdminProjects = async (req, res, next) => {
  try {
    const projects = await projectService.getAllProjects(true);
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
};

const getProject = async (req, res, next) => {
  try {
    const project = await projectService.getProjectBySlug(req.params.slug);
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

const createProject = async (req, res, next) => {
  try {
    const project = await projectService.createProject(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const project = await projectService.updateProject(req.params.id, req.body);
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    await projectService.deleteProject(req.params.id);
    res.status(200).json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProjects, getAdminProjects, getProject, createProject, updateProject, deleteProject
};
