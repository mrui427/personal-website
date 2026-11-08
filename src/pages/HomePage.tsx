import { techSkills } from '../data/techSkills'
import { localizeContent } from '../i18n/content'
import { Trans } from '../i18n/Language'
import { useLanguage } from '../i18n/context'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import heroDog from '../assets/dog/c815d4ae-b98d-4d10-a167-c2b2da33c912.png'

import { getProjects } from '../lib/projectQueries'
import { urlFor, type ProjectCoverImage } from '../lib/image'

import './HomePage.css'


/* =========================================================
   TYPES
   ========================================================= */

type Project = {
  _id: string
  title: string
  slug: string
  category?: string
  shortDescription?: string
  stack?: string[]
  accent?: string
  coverImage?: ProjectCoverImage
}


/* =========================================================
   ICON HELPERS
   ========================================================= */

function getProjectIcon(slug: string) {
  if (slug === 'smartnail') return '◫'

  if (slug === 'ai-visibility-analytics') return '▥'

  return '↗'
}




/* =========================================================
   PAGE
   ========================================================= */

function HomePage() {
  const { language } = useLanguage()
  const [featuredProjectsData, setFeaturedProjects] = useState<Project[]>([])
  const [projectsLoading, setProjectsLoading] = useState(true)


  /* =========================================================
     LOAD PROJECTS FROM SANITY
     ========================================================= */

  const featuredProjects = featuredProjectsData.map((entry) => localizeContent(entry, language))

  useEffect(() => {
    getProjects()
      .then((data) => {
        setFeaturedProjects(data.slice(0, 3))
      })
      .catch((error) => {
        console.error(
          'Failed to fetch featured projects:',
          error
        )

        setFeaturedProjects([])
      })
      .finally(() => {
        setProjectsLoading(false)
      })
  }, [])


  return (
    <main className="home-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="home-hero">

        <div className="hero-background-art">

          <img
            src={heroDog}
            alt="Morri working with a laptop and her dog"
          />

        </div>


        <div className="hero-copy">

          <p className="hero-eyebrow"><Trans text="BUILD · LEARN · SHARE" /></p>


          <h1><Trans text="Hi, I'm Morri." /></h1>


          <p className="hero-role"><Trans text="AI software engineer | Full-stack developer | Lifelong learner" /></p>


          <p className="hero-description"><Trans text="I build practical AI-enabled web applications and document my learning journey along the way. ♡" /></p>


          <div className="hero-actions">

            <Link
              to="/projects"
              className="hero-button hero-button-primary"
            ><Trans text="View Projects" /></Link>


            <Link
              to="/notes"
              className="hero-button hero-button-secondary"
            ><Trans text="Learning Notes" /></Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          01 / PROJECTS
          ===================================================== */}

      <section className="home-section">

        <div className="home-section-heading">

          <span className="section-index">
            01
          </span>


          <div className="section-heading-copy">

            <h2><Trans text="Selected Projects" /></h2>

            <p><Trans text="Some things I've built, with a focus on real-world problems and practical solutions." /></p>

          </div>


          <Link
            className="section-link"
            to="/projects"
          ><Trans text="View all projects →" /></Link>

        </div>


        {projectsLoading ? (

          <div className="home-project-loading"><Trans text="Loading projects..." /></div>

        ) : featuredProjects.length === 0 ? (

          <div className="home-project-loading"><Trans text="No projects yet." /></div>

        ) : (

          <div className="home-project-grid home-project-grid-three">

            {featuredProjects.map((project) => (

              <Link
                to={`/projects/${project.slug}`}
                className="home-project-card"
                key={project._id}
              >

                <div className="project-card-top">

                  {project.coverImage?.asset ? (
                    <img
                      className="home-project-cover"
                      src={urlFor(project.coverImage).width(800).height(600).fit('crop').auto('format').url()}
                      alt={`${project.title} cover`}
                      loading="lazy"
                    />
                  ) : (
                  <div
                    className="project-icon-box"
                    style={{
                      backgroundColor:
                        project.accent || '#ece8e2',
                    }}
                  >
                    {getProjectIcon(project.slug)}
                  </div>
                  )}


                  <span className="project-arrow">
                    ↗
                  </span>

                </div>


                <div className="project-card-copy">

                  <p className="project-kicker">
                    <Trans text={project.category || 'Project'} />
                  </p>


                  <h3>
                    <Trans text={project.title} />
                  </h3>


                  {project.shortDescription && (
                    <p>
                      <Trans text={project.shortDescription} />
                    </p>
                  )}

                </div>


                {project.stack &&
                  project.stack.length > 0 && (

                    <div className="home-tags">

                      {project.stack
                        .slice(0, 5)
                        .map((tech) => (

                          <span key={tech}>
                            <Trans text={tech} />
                          </span>

                        ))}

                    </div>

                  )}

              </Link>

            ))}

          </div>

        )}

      </section>


      {/* =====================================================
          03 / TECH STACK
          ===================================================== */}

      <section className="home-section">

        <div className="home-section-heading home-section-heading-no-link">

          <span className="section-index">
            02
          </span>


          <div className="section-heading-copy">

            <h2><Trans text="Tech Stack" /></h2>

            <p><Trans text="Tools and technologies I use for building full-stack and AI-enabled applications." /></p>

          </div>

        </div>


        <div className="tech-stack-grid">

          {techSkills.map((skill, index) => (
            <Link
              to={`/notes/${skill.slug}`}
              className="tech-stack-item"
              key={skill.slug}
            >

              <span>
                {String(index + 1).padStart(2, '0')}
              </span>


              <strong>
                <Trans text={skill.title} />
              </strong>

            </Link>

          ))}

        </div>

      </section>


      {/* =====================================================
          04 / ABOUT
          05 / CONTACT
          ===================================================== */}

      <section className="home-section home-bottom-layout">


        {/* ABOUT */}

        <div className="about-preview">

          <span className="section-number">
            03
          </span>


          <div className="about-preview-content">

            <p className="bottom-eyebrow"><Trans text="ABOUT ME" /></p>


            <h2><Trans text="I like building things" /><br /><Trans text="that feel useful." /></h2>


            <p><Trans text="I'm interested in full-stack development, AI applications, and turning ideas into practical products." /></p>


            <Link
              to="/about"
              className="bottom-link"
            ><Trans text="More about me →" /></Link>

          </div>

        </div>


        {/* CONTACT */}

        <div className="contact-preview">

          <span className="section-number">
            04
          </span>


          <div className="contact-preview-content">

            <p className="bottom-eyebrow"><Trans text="LET'S CONNECT" /></p>


            <h2><Trans text="Have something" /><br /><Trans text="interesting in mind?" /></h2>


            <p><Trans text="I'm always open to talking about software, AI, products, and interesting ideas." /></p>


            <Link
              to="/contact"
              className="contact-button"
            ><Trans text="Get in touch" /></Link>

          </div>

        </div>

      </section>

    </main>
  )
}

export default HomePage
