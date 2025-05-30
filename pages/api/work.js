import data from './work.json';

export const getWorkProjects = () => {
  return data;
};

export default (_res) => {
  const projects = getWorkProjects();
  _res.json(projects);
};