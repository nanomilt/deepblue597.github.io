import data from "./internship-projects.json";

export const getInternshipProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getInternshipProjects();
  res.json(projects);
};
