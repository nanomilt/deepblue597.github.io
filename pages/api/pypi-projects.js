import data from './pypi-projects.json';

export const getPyPiProjects = () => {
  return data;
};

export default (_req, res) => {
  const projects = getPyPiProjects();
  res.json(projects);
};