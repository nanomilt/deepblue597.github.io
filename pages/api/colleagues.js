import data from './colleagues.json';

export const getIColleagues = () => {
  return data;
};

export default (_) => {
  const projects = getIColleagues();
  return projects;
};