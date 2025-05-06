import data from "./work.json";

export const getWorkProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getWorkProjects();
  res.json(projects);
};
