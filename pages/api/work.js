import data from './work.json';

export const getWorkProjects = () => {
  return data;
};

export default (_) => {
  const projects = getWorkProjects();
  return projects;
};