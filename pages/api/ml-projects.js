import data from './ml-projects.json';

export const getMLProjects = () => {
  return data;
};

export default (_, res) => {
  const projects = getMLProjects();
  res.json(projects);
};