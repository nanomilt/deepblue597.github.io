import data from './misc-projects.json';

export const getMiscProjects = () => {
  return data;
};

export default (_) => {
  const projects = getMiscProjects();
  return projects;
};