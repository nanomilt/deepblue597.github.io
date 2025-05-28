import data from './colleagues.json';

export const getIColleagues = () => {
  return data;
};

export default (_res) => {
  const projects = getIColleagues();
  _res.json(projects);
};