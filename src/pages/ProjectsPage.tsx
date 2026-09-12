import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectsPage.css'

function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-label">
          Selected work · 2025—2026
        </div>

        <h1>
          Things I've
          <br />
          been building.
        </h1>

        <p>
          A collection of full-stack products, AI experiments and projects
          where I learned by actually making things.
        </p>
      </section>

      <section className="projects-list">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="project-row"
          >
            <div className="project-index">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div
              className="project-visual"
              style={{ backgroundColor: project.accent }}
            >
              <span className="project-visual-title">
                {project.title}
              </span>

              <span className="project-visual-arrow">
                ↗
              </span>
            </div>

            <div className="project-row-content">
              <div className="project-row-top">
                <div>
                  <p className="project-category">
                    {project.category}
                  </p>

                  <h2>{project.title}</h2>
                </div>

                <span className="project-year">
                  {project.year}
                </span>
              </div>

              <p className="project-description">
                {project.shortDescription}
              </p>

              <div className="project-stack">
                {project.stack.slice(0, 5).map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default ProjectsPage