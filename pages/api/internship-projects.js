import data from './internship-projects.json';

export const getInternshipProjects = () => {
  return data;
};

export default (_, res) => {
  const projects = getInternshipProjects();
  res.json(projects);
};