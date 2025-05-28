import data from './bots-projects.json';

export const getBotsProjects = () => {
  return data;
};

export default (_) => {
  const projects = getBotsProjects();
  return projects;
};