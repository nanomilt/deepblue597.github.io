import data from './misc-projects.json';

export const getMiscProjects = () => {
  return data;
};

export default (_res) => {
  const projects = getMiscProjects();
  _res.json(projects);
};