import data from './bots-projects.json';

export const getBotsProjects = () => {
  return data;
};

export default (_res) => {
  const projects = getBotsProjects();
  _res.json(projects);
};