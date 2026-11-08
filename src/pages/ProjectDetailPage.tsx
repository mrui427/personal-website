import { localizeContent } from '../i18n/content'
import { Trans } from '../i18n/Language'
import { useLanguage } from '../i18n/context'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getProjectBySlug } from '../lib/projectQueries'

import { urlFor, type ProjectCoverImage } from '../lib/image'

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
  coverImage?: ProjectCoverImage
}

function ProjectDetailPage() {
  const { language } = useLanguage()
  const { slug } = useParams()

  const [projectData, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  const project = localizeContent(projectData, language)

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
          <p><Trans text="Loading project..." /></p>
        </div>
      </main>
    )
  }

  if (!project) {
    return (
      <main className="project-detail-page">
        <div className="project-not-found">
          <p><Trans text="Project not found." /></p>

          <Link to="/projects"><Trans text="← Back to projects" /></Link>
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
      ><Trans text="← All projects" /></Link>

      {/* HERO */}

      <section className="project-detail-hero">

        <div className="project-detail-heading">

          <p className="project-detail-category">
            <Trans text={project.category || 'Project'} />

            {project.year && (
              <>
                {' · '}
                {project.year}
              </>
            )}
          </p>

          <h1>
            <Trans text={project.title} />
          </h1>

          {project.subtitle && (
            <p className="project-detail-subtitle">
              <Trans text={project.subtitle} />
            </p>
          )}

        </div>

        <div className="project-detail-meta">

          {project.role && (
            <div>
              <span><Trans text="Role" /></span>
              <p><Trans text={project.role} /></p>
            </div>
          )}

          {project.year && (
            <div>
              <span><Trans text="Year" /></span>
              <p>{project.year}</p>
            </div>
          )}

          {project.stack && project.stack.length > 0 && (
            <div>
              <span><Trans text="Stack" /></span>

              <p>
                {project.stack.join(', ')}
              </p>
            </div>
          )}

        </div>

      </section>

      {/* visual */}

      <section
        className={`project-cover${project.coverImage?.asset ? ' project-cover-with-image' : ''}`}
        style={{
          backgroundColor:
            project.accent || '#e8e8e8',
        }}
      >
        {project.coverImage?.asset ? (
          <img
            className="project-cover-image"
            src={urlFor(project.coverImage).width(1600).auto('format').url()}
            alt={`${project.title} cover`}
          />
        ) : (
        <div className="project-cover-inner">

          <span>
            <Trans text={project.title} />
          </span>

          <div className="project-cover-doodle">
            ✳
          </div>

          {project.subtitle && (
            <p>
              <Trans text={project.subtitle} />
            </p>
          )}

        </div>
        )}
      </section>

      {/* overview */}

      {project.overview && (
        <section className="project-section project-intro-section">

          <p className="project-section-label"><Trans text="01 / Overview" /></p>

          <div className="project-large-copy">
            <Trans text={project.overview} />
          </div>

        </section>
      )}

      {/* problem / solution */}

      {(project.problem || project.solution) && (
        <section className="project-two-column">

          {project.problem && (
            <div className="project-info-block">

              <p className="project-section-label"><Trans text="02 / The problem" /></p>

              <p>
                <Trans text={project.problem} />
              </p>

            </div>
          )}

          {project.solution && (
            <div className="project-info-block">

              <p className="project-section-label"><Trans text="03 / The approach" /></p>

              <p>
                <Trans text={project.solution} />
              </p>

            </div>
          )}

        </section>
      )}

      {/* highlights */}

      {project.highlights && project.highlights.length > 0 && (
        <section className="project-section">

          <p className="project-section-label"><Trans text="04 / Key features" /></p>

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
                    <Trans text={highlight} />
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

            <p className="project-section-label"><Trans text="05 / What I worked on" /></p>

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
                      <Trans text={item} />
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

          <p className="project-section-label"><Trans text="06 / What I learned" /></p>

          <h2><Trans text="Building it taught me more than simply finishing the feature." /></h2>

          <div className="project-learning-grid">

            {project.learnings.map(
              (learning, index) => (
                <p key={`${learning}-${index}`}>
                  <Trans text={learning} />
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
            ><Trans text="GitHub ↗" /></a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            ><Trans text="Live project ↗" /></a>
          )}

        </section>
      )}

      {/* next */}

      <section className="project-detail-footer">

        <p><Trans text="More things I've made" /></p>

        <Link to="/projects"><Trans text="View all projects →" /></Link>

      </section>

    </main>
  )
}

export default ProjectDetailPage