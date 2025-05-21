export const getPyPiProjects = () => {
  const data = require('./pypi-projects.json');
  return data;
};

export default (_, res) => {
  const projects = getPyPiProjects();
  res.json(projects);
};