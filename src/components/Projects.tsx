import type { Project } from '../types/portfolio';

interface Props {
  projects: Project[];
}

function Projects({ projects }: Props) {
  return (
    <ul className="items">
      {projects.map((project) => (
        <li key={project.id} className="projectItem">
          <h3 className="projectTitle">{project.name}</h3>
          <p className="projectMeta">
            {project.company} · {project.period}
          </p>
          <p>{project.summary}</p>
          <ul className="projectHighlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default Projects;
