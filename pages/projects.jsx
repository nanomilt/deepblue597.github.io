import ProjectCard from '../components/ProjectCard';
import { getMLProjects } from './api/ml-projects';
import { getWorkProjects } from './api/work';
import { getInternshipProjects } from './api/internship-projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({
  ml_projects,
  work_projects,
  intern_projects,
}) => {
  return (
    <>
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
    </>
  );
};

export async function getStaticProps() {
  const ml_projects = getMLProjects();
  const work_projects = getWorkProjects();
  const intern_projects = getInternshipProjects();

  return {
    props: {
      ml_projects,
      work_projects,
      intern_projects,
    },
  };
}

export default ProjectsPage;