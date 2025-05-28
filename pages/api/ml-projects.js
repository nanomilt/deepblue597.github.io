// FIXED_CODE

import data from './ml-projects.json';

export const getMLProjects = () => {
  return data;
};

export default (_res) => {
  const projects = getMLProjects();
  _res.json(projects);
};