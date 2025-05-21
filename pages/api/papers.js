import data from './published-papers.json';

export const getPapers = () => {
  return data;
};

export default (_res) => {
  const projects = getPapers();
  _res.json(projects);
};