import data from './misc-projects.json';

export const getMiscProjects = () => {
  return data;
};

export default (_, __, next) => {
  const projects = getMiscProjects();
  next(projects);
};