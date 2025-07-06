import data from './internship-projects.json';

export const getInternshipProjects = () => {
  return data;
};

export default (_res) => {
  const projects = getInternshipProjects();
  _res.json(projects);
};