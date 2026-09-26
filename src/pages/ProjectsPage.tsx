import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroDog from '../assets/dog/815dea1c-7ca6-43b5-82d2-9ab5f82071f1.png'

import { getProjects } from '../lib/projectQueries'

import './ProjectsPage.css'


type Project = {
  _id: string
  title: string
  slug: string
  year?: string
  category?: string
  shortDescription?: string
  stack?: string[]
  accent?: string
}

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data)
      })
      .catch((error) => {
        console.error('Failed to fetch projects:', error)
        setProjects([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
     <main className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-copy">
          <p>
            A collection of full-stack products, AI experiments and projects
            where I learned by actually making things.
          </p>
        </div>

        <div className="projects-hero-art">
          <img
            src={heroDog}
            alt="Dog illustration"
          />
        </div>
      </section>

      {loading ? (
        <section className="projects-list">
          <p>Loading projects...</p>
        </section>
      ) : projects.length === 0 ? (
        <section className="projects-list">
          <p>No projects yet.</p>
        </section>
      ) : (
        <section className="projects-list">
          {projects.map((project, index) => (
            <Link
              key={project._id}
              to={`/projects/${project.slug}`}
              className="project-row"
            >
              <div className="project-index">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div
                className="project-visual"
                style={{
                  backgroundColor: project.accent || '#e8e8e8',
                }}
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
                      {project.category || 'Project'}
                    </p>

                    <h2>{project.title}</h2>
                  </div>

                  {project.year && (
                    <span className="project-year">
                      {project.year}
                    </span>
                  )}
                </div>

                {project.shortDescription && (
                  <p className="project-description">
                    {project.shortDescription}
                  </p>
                )}

                {project.stack && project.stack.length > 0 && (
                  <div className="project-stack">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </section>
      )}
    </main>
  )
}

export default ProjectsPage