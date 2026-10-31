import apiClient from '../../../shared/api/axiosClient';

export const getProjects = async () => {
  const { data } = await apiClient.get('/projects');
  return data.data;
};

export const getProjectBySlug = async (slug) => {
  const { data } = await apiClient.get(`/projects/${slug}`);
  return data.data;
};

export const submitContactForm = async (formData) => {
  const { data } = await apiClient.post('/contact', formData);
  return data;
};
