import data from './pypi-projects.json';

export const getPyPiProjects = () => {
  return data;
};

export default (_, res) => {
  const projects = getPyPiProjects();
  res.json(projects);
};