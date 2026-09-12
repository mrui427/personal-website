import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import './ProjectDetailPage.css'

function ProjectDetailPage() {
  const { slug } = useParams()

  const project = slug
    ? getProjectBySlug(slug)
    : undefined

  if (!project) {
    return (
      <main className="project-detail-page">
        <div className="project-not-found">
          <p>Project not found.</p>

          <Link to="/projects">
            ← Back to projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="project-detail-page">

      {/* back */}

      <Link
        to="/projects"
        className="project-back"
      >
        ← All projects
      </Link>

      {/* HERO */}

      <section className="project-detail-hero">

        <div className="project-detail-heading">

          <p className="project-detail-category">
            {project.category} · {project.year}
          </p>

          <h1>
            {project.title}
          </h1>

          <p className="project-detail-subtitle">
            {project.subtitle}
          </p>

        </div>

        <div className="project-detail-meta">

          <div>
            <span>Role</span>
            <p>{project.role}</p>
          </div>

          <div>
            <span>Year</span>
            <p>{project.year}</p>
          </div>

          <div>
            <span>Stack</span>

            <p>
              {project.stack.join(', ')}
            </p>
          </div>

        </div>

      </section>

      {/* visual */}

      <section
        className="project-cover"
        style={{ backgroundColor: project.accent }}
      >
        <div className="project-cover-inner">

          <span>
            {project.title}
          </span>

          <div className="project-cover-doodle">
            ✳
          </div>

          <p>
            {project.subtitle}
          </p>

        </div>
      </section>

      {/* overview */}

      <section className="project-section project-intro-section">

        <p className="project-section-label">
          01 / Overview
        </p>

        <div className="project-large-copy">
          {project.overview}
        </div>

      </section>

      {/* problem / solution */}

      <section className="project-two-column">

        <div className="project-info-block">

          <p className="project-section-label">
            02 / The problem
          </p>

          <p>
            {project.problem}
          </p>

        </div>

        <div className="project-info-block">

          <p className="project-section-label">
            03 / The approach
          </p>

          <p>
            {project.solution}
          </p>

        </div>

      </section>

      {/* highlights */}

      <section className="project-section">

        <p className="project-section-label">
          04 / Key features
        </p>

        <div className="project-feature-grid">

          {project.highlights.map(
            (highlight, index) => (
              <div
                key={highlight}
                className="project-feature-card"
              >
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p>
                  {highlight}
                </p>
              </div>
            )
          )}

        </div>

      </section>

      {/* responsibilities */}

      <section className="project-section">

        <p className="project-section-label">
          05 / What I worked on
        </p>

        <div className="project-number-list">

          {project.responsibilities.map(
            (item, index) => (
              <div
                key={item}
                className="project-number-item"
              >
                <span>
                  {index + 1}
                </span>

                <p>
                  {item}
                </p>
              </div>
            )
          )}

        </div>

      </section>

      {/* learnings */}

      <section className="project-section project-learning-section">

        <p className="project-section-label">
          06 / What I learned
        </p>

        <h2>
          Building it taught me more than
          simply finishing the feature.
        </h2>

        <div className="project-learning-grid">

          {project.learnings.map(
            (learning) => (
              <p key={learning}>
                {learning}
              </p>
            )
          )}

        </div>

      </section>

      {/* links */}

      {(project.github || project.demo) && (
        <section className="project-links-section">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live project ↗
            </a>
          )}

        </section>
      )}

      {/* next */}

      <section className="project-detail-footer">

        <p>
          More things I've made
        </p>

        <Link to="/projects">
          View all projects →
        </Link>

      </section>

    </main>
  )
}

export default ProjectDetailPage