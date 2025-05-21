import data from './ml-projects.json';

export const getMLProjects = () => {
  return data;
};

export default (_) => {
  const projects = getMLProjects();
  return projects;
};