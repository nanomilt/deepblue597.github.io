import data from './internship-projects.json';

export const getInternshipProjects = () => {
  return data;
};

export default (_) => {
  const projects = getInternshipProjects();
  return projects;
};