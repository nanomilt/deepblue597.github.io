import data from "./colleagues.json";

export const getIColleagues = () => {
  return data;
};

export default (req, res) => {
  const projects = getIColleagues();
  res.json(projects);
};
