const Project = require('../../models/Project');

const getAllProjects = async (isAdmin = false) => {
  const query = isAdmin ? {} : { where: { status: 'published' } };
  query.order = [['displayOrder', 'ASC'], ['createdAt', 'DESC']];
  return Project.findAll(query);
};

const getProjectBySlug = async (slug) => {
  const project = await Project.findOne({ where: { slug } });
  if (!project) {
    const error = new Error('Project not found');
    error.status = 404;
    throw error;
  }
  return project;
};

const createProject = async (data) => {
  return Project.create(data);
};

const updateProject = async (id, data) => {
  const project = await Project.findByPk(id);
  if (!project) {
    const error = new Error('Project not found');
    error.status = 404;
    throw error;
  }
  return project.update(data);
};

const deleteProject = async (id) => {
  const project = await Project.findByPk(id);
  if (!project) {
    const error = new Error('Project not found');
    error.status = 404;
    throw error;
  }
  await project.destroy();
  return { id };
};

module.exports = {
  getAllProjects, getProjectBySlug, createProject, updateProject, deleteProject
};
