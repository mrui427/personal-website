import { localizeContent } from '../i18n/content'
import { Trans } from '../i18n/Language'
import { useLanguage } from '../i18n/context'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroDog from '../assets/dog/815dea1c-7ca6-43b5-82d2-9ab5f82071f1.png'

import { getProjects } from '../lib/projectQueries'

import { urlFor, type ProjectCoverImage } from '../lib/image'

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
  coverImage?: ProjectCoverImage
}

function ProjectsPage() {
  const { language } = useLanguage()
  const [projectsData, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  const projects = projectsData.map((entry) => localizeContent(entry, language))

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
          <p><Trans text="A collection of full-stack products, AI experiments and projects where I learned by actually making things." /></p>
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
          <p><Trans text="Loading projects..." /></p>
        </section>
      ) : projects.length === 0 ? (
        <section className="projects-list">
          <p><Trans text="No projects yet." /></p>
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
                {project.coverImage?.asset ? (
                  <img
                    className="project-visual-image"
                    src={urlFor(project.coverImage).width(800).height(600).fit('crop').auto('format').url()}
                    alt={`${project.title} cover`}
                    loading="lazy"
                  />
                ) : (
                <span className="project-visual-title">
                  <Trans text={project.title} />
                </span>
                )}

                <span className="project-visual-arrow">
                  ↗
                </span>
              </div>

              <div className="project-row-content">
                <div className="project-row-top">
                  <div>
                    <p className="project-category">
                      <Trans text={project.category || 'Project'} />
                    </p>

                    <h2><Trans text={project.title} /></h2>
                  </div>

                  {project.year && (
                    <span className="project-year">
                      {project.year}
                    </span>
                  )}
                </div>

                {project.shortDescription && (
                  <p className="project-description">
                    <Trans text={project.shortDescription} />
                  </p>
                )}

                {project.stack && project.stack.length > 0 && (
                  <div className="project-stack">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span key={tech}>
                        <Trans text={tech} />
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