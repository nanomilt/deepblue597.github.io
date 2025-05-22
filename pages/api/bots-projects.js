import data from './bots-projects.json';

export const getBotsProjects = () => {
  return data;
};

export default (res) => {
  const projects = getBotsProjects();
  res.json(projects);
};