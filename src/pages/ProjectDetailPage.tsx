import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getProjectBySlug } from '../lib/projectQueries'

import './ProjectDetailPage.css'

type Project = {
  _id: string
  title: string
  slug: string
  subtitle?: string
  year?: string
  category?: string
  role?: string
  stack?: string[]
  overview?: string
  problem?: string
  solution?: string
  highlights?: string[]
  responsibilities?: string[]
  learnings?: string[]
  accent?: string
  github?: string
  demo?: string
}

function ProjectDetailPage() {
  const { slug } = useParams()

  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) {
      setLoading(false)
      return
    }

    getProjectBySlug(slug)
      .then((data) => {
        setProject(data)
      })
      .catch((error) => {
        console.error('Failed to fetch project:', error)
        setProject(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return (
      <main className="project-detail-page">
        <div className="project-not-found">
          <p>Loading project...</p>
        </div>
      </main>
    )
  }

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
            {project.category || 'Project'}

            {project.year && (
              <>
                {' · '}
                {project.year}
              </>
            )}
          </p>

          <h1>
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="project-detail-subtitle">
              {project.subtitle}
            </p>
          )}

        </div>

        <div className="project-detail-meta">

          {project.role && (
            <div>
              <span>Role</span>
              <p>{project.role}</p>
            </div>
          )}

          {project.year && (
            <div>
              <span>Year</span>
              <p>{project.year}</p>
            </div>
          )}

          {project.stack && project.stack.length > 0 && (
            <div>
              <span>Stack</span>

              <p>
                {project.stack.join(', ')}
              </p>
            </div>
          )}

        </div>

      </section>

      {/* visual */}

      <section
        className="project-cover"
        style={{
          backgroundColor:
            project.accent || '#e8e8e8',
        }}
      >
        <div className="project-cover-inner">

          <span>
            {project.title}
          </span>

          <div className="project-cover-doodle">
            ✳
          </div>

          {project.subtitle && (
            <p>
              {project.subtitle}
            </p>
          )}

        </div>
      </section>

      {/* overview */}

      {project.overview && (
        <section className="project-section project-intro-section">

          <p className="project-section-label">
            01 / Overview
          </p>

          <div className="project-large-copy">
            {project.overview}
          </div>

        </section>
      )}

      {/* problem / solution */}

      {(project.problem || project.solution) && (
        <section className="project-two-column">

          {project.problem && (
            <div className="project-info-block">

              <p className="project-section-label">
                02 / The problem
              </p>

              <p>
                {project.problem}
              </p>

            </div>
          )}

          {project.solution && (
            <div className="project-info-block">

              <p className="project-section-label">
                03 / The approach
              </p>

              <p>
                {project.solution}
              </p>

            </div>
          )}

        </section>
      )}

      {/* highlights */}

      {project.highlights && project.highlights.length > 0 && (
        <section className="project-section">

          <p className="project-section-label">
            04 / Key features
          </p>

          <div className="project-feature-grid">

            {project.highlights.map(
              (highlight, index) => (
                <div
                  key={`${highlight}-${index}`}
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
      )}

      {/* responsibilities */}

      {project.responsibilities &&
        project.responsibilities.length > 0 && (
          <section className="project-section">

            <p className="project-section-label">
              05 / What I worked on
            </p>

            <div className="project-number-list">

              {project.responsibilities.map(
                (item, index) => (
                  <div
                    key={`${item}-${index}`}
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
        )}

      {/* learnings */}

      {project.learnings && project.learnings.length > 0 && (
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
              (learning, index) => (
                <p key={`${learning}-${index}`}>
                  {learning}
                </p>
              )
            )}

          </div>

        </section>
      )}

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