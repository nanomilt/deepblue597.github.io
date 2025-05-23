import data from './work.json';

export const getWorkProjects = () => {
  return data;
};

export default (_, res) => {
  const projects = getWorkProjects();
  res.json(projects);
};