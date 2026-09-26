import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import heroDog from '../assets/dog/c815d4ae-b98d-4d10-a167-c2b2da33c912.png'

import { getProjects } from '../lib/projectQueries'

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
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])
  const [projectsLoading, setProjectsLoading] = useState(true)


  /* =========================================================
     LOAD PROJECTS FROM SANITY
     ========================================================= */

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

          <p className="hero-eyebrow">
            BUILD · LEARN · SHARE
          </p>


          <h1>
            Hi, I&apos;m Morri.
          </h1>


          <p className="hero-role">
            AI software engineer | Full-stack developer | Lifelong learner
          </p>


          <p className="hero-description">
            I build practical AI-enabled web applications
            and document my learning journey along the way. ♡
          </p>


          <div className="hero-actions">

            <Link
              to="/projects"
              className="hero-button hero-button-primary"
            >
              View Projects
            </Link>


            <Link
              to="/notes"
              className="hero-button hero-button-secondary"
            >
              Learning Notes
            </Link>

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

            <h2>
              Selected Projects
            </h2>

            <p>
              Some things I&apos;ve built,
              with a focus on real-world problems
              and practical solutions.
            </p>

          </div>


          <Link
            className="section-link"
            to="/projects"
          >
            View all projects →
          </Link>

        </div>


        {projectsLoading ? (

          <div className="home-project-loading">
            Loading projects...
          </div>

        ) : featuredProjects.length === 0 ? (

          <div className="home-project-loading">
            No projects yet.
          </div>

        ) : (

          <div className="home-project-grid home-project-grid-three">

            {featuredProjects.map((project) => (

              <Link
                to={`/projects/${project.slug}`}
                className="home-project-card"
                key={project._id}
              >

                <div className="project-card-top">

                  <div
                    className="project-icon-box"
                    style={{
                      backgroundColor:
                        project.accent || '#ece8e2',
                    }}
                  >
                    {getProjectIcon(project.slug)}
                  </div>


                  <span className="project-arrow">
                    ↗
                  </span>

                </div>


                <div className="project-card-copy">

                  <p className="project-kicker">
                    {project.category || 'Project'}
                  </p>


                  <h3>
                    {project.title}
                  </h3>


                  {project.shortDescription && (
                    <p>
                      {project.shortDescription}
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
                            {tech}
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

            <h2>
              Tech Stack
            </h2>

            <p>
              Tools and technologies I use
              for building full-stack and
              AI-enabled applications.
            </p>

          </div>

        </div>


        <div className="tech-stack-grid">

          {[
            'React',
            'TypeScript',
            'JavaScript',
            'Python',
            'NestJS',
            'PostgreSQL',
            'Prisma',
            'Git',
            'Docker',
            'Vite',
            'LangChain',
            'REST API',
          ].map((tech, index) => (

            <div
              className="tech-stack-item"
              key={tech}
            >

              <span>
                {String(index + 1).padStart(2, '0')}
              </span>


              <strong>
                {tech}
              </strong>

            </div>

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

            <p className="bottom-eyebrow">
              ABOUT ME
            </p>


            <h2>
              I like building things
              <br />
              that feel useful.
            </h2>


            <p>
              I&apos;m interested in full-stack development,
              AI applications,
              and turning ideas into practical products.
            </p>


            <Link
              to="/about"
              className="bottom-link"
            >
              More about me →
            </Link>

          </div>

        </div>


        {/* CONTACT */}

        <div className="contact-preview">

          <span className="section-number">
            04
          </span>


          <div className="contact-preview-content">

            <p className="bottom-eyebrow">
              LET&apos;S CONNECT
            </p>


            <h2>
              Have something
              <br />
              interesting in mind?
            </h2>


            <p>
              I&apos;m always open to talking about
              software, AI, products,
              and interesting ideas.
            </p>


            <Link
              to="/contact"
              className="contact-button"
            >
              Get in touch
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}

export default HomePage