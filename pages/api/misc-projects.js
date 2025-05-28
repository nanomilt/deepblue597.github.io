import data from './misc-projects.json';

export const getMiscProjects = () => {
  return data;
};

export default (_, res) => {
  const projects = getMiscProjects();
  res.json(projects);
};