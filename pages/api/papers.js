import data from './published-papers.json';

export const getPapers = () => {
  return data;
};

export default (_) => {
  const projects = getPapers();
  return projects;
};