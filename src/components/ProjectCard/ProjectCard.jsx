
import ScatterPlot from "../ScatterPlot/ScatterPlot";
import "./ProjectCard.css";

function ProjectCard({
  title,
  description,
  category,
  technologies = [],
  seed = 7,
  githubUrl,
  demoUrl,
  comingSoon = false
}) {
  return (
    <article className="project-card">
      <div className="project-card-visual">
        <ScatterPlot
          count={100}
          seed={seed}
          height="100%"
          accent="#5e8090"
          muted="#6c7279"
          noise={0.06}
        />
      </div>

      <div className="project-card-content">
        <span className="project-category">{category}</span>

        <h2>{title}</h2>

        <p>{description}</p>

        <div className="project-technologies">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {comingSoon ? (
          <div className="project-coming-soon">
            Coming Soon
          </div>
        ) : (
          <div className="project-card-buttons">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-primary"
              >
                Live Demo <span>↗</span>
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-secondary"
              >
                View on GitHub <span>↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
