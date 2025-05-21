import data from './pypi-projects.json';

export const getPyPiProjects = () => {
  return data;
};

export default (_res) => {
  const projects = getPyPiProjects();
  _res.json(projects);
};