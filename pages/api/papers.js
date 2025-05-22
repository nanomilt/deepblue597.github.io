import data from './published-papers.json';

export const getPapers = () => {
  return data;
};

export default (_, __, res) => {
  const projects = getPapers();
  res.json(projects);
};