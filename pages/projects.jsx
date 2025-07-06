import ProjectCard from "../components/ProjectCard";
import { getMLProjects } from "./api/ml-projects";
import { getWorkProjects } from "./api/work";
// import { getPyPiProjects } from "./api/pypi-projects";
// import { getMiscProjects } from "./api/misc-projects";
import { getInternshipProjects } from "./api/internship-projects";
import styles from "../styles/ProjectsPage.module.css";

const ProjectsPage = ({
  ml_projects,
  work_projects,
  intern_projects,
}) => {
  return (
    <>
      {/* <h3>Open Source Projects</h3>
      <br/> */}
      <center>
        <h4>Internship Projects</h4>
      </center>
      <hr />
      <div className={styles.container}>
        {intern_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br />
      <center>
        <h4>University Projects</h4>
      </center>
      <hr />
      <div className={styles.container}>
        {ml_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br />
      <center>
        <h4>Projects in SpaceDot</h4>
      </center>
      <hr />
      <div className={styles.container}>
        {work_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br />
    </>
  );
};

export async function getStaticProps() {
  const ml_projects = await getMLProjects();
  const work_projects = await getWorkProjects();
  // const pypi_projects = await getPyPiProjects();
  // const misc_projects = await getMiscProjects();
  const intern_projects = await getInternshipProjects();

  return {
    props: {
      title: "Projects",
      ml_projects,
      work_projects,
      intern_projects,
    },
  };
}

export default ProjectsPage;