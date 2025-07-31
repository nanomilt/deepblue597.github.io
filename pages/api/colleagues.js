import data from './colleagues.json';

export const getIColleagues = () => {
  return data;
};

export default (_,res) => {
  const projects = getIColleagues();
  res.json(projects);
};