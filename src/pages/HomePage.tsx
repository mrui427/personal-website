import { Link } from 'react-router-dom'

import heroDog from '../assets/dog/c815d4ae-b98d-4d10-a167-c2b2da33c912.png'
import { projects } from '../data/projects'
import { learningItems } from '../data/learning'

import './HomePage.css'

function getProjectIcon(slug: string) {
  if (slug === 'smartnail') return '◫'
  if (slug === 'ai-visibility-analytics') return '▥'
  return '↗'
}

function getLearningIcon(slug: string) {
  if (slug === 'algorithms' || slug === 'leetcode') return '⌘'
  if (slug === 'docker') return '◫'
  if (slug === 'full-stack' || slug === 'full-stack-development') return '▰'
  if (slug === 'ai-engineering' || slug === 'ai-application-development') return '◎'
  if (slug === 'english') return 'Aa'
  return '▦'
}

function HomePage() {
  const featuredProjects = projects.slice(0, 3)
  const featuredLearning = learningItems.slice(0, 5)

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-background-art">
          <img src={heroDog} alt="Mingrui working with a laptop and her dog" />
        </div>

        <div className="hero-copy">
          <p className="hero-eyebrow">BUILD · LEARN · SHARE</p>

          <h1>
            Hi, I&apos;m
            <span>Mingrui Zhang</span>
          </h1>

          <p className="hero-nickname">( Baicai )</p>

          <p className="hero-role">
            AI software engineer | Full-stack builder | Learning in public
          </p>

          <p className="hero-description">
            I build practical AI-enabled web applications, and document my
            learning journey along the way. Also known as Baicai ♡
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="hero-button hero-button-primary">
              View Projects
            </Link>

            <Link to="/notes" className="hero-button hero-button-secondary">
              Learning Notes
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <span className="section-index">01</span>

          <div className="section-heading-copy">
            <h2>Selected Projects</h2>
            <p>
              Some things I&apos;ve built, with a focus on real-world problems
              and practical solutions.
            </p>
          </div>

          <Link className="section-link" to="/projects">
            View all projects →
          </Link>
        </div>

        <div className="home-project-grid home-project-grid-three">
          {featuredProjects.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              className="home-project-card"
              key={project.slug}
            >
              <div className="project-card-top">
                <div
                  className="project-icon-box"
                  style={{ backgroundColor: project.accent }}
                >
                  {getProjectIcon(project.slug)}
                </div>

                <span className="project-arrow">↗</span>
              </div>

              <div className="project-card-copy">
                <p className="project-kicker">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
              </div>

              <div className="home-tags">
                {project.stack.slice(0, 5).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <span className="section-index">02</span>

          <div className="section-heading-copy">
            <h2>What I&apos;m Learning</h2>
            <p>
              Learning never stops. Here are some areas I&apos;m currently
              exploring.
            </p>
          </div>

          <Link className="section-link" to="/learning">
            View all learning →
          </Link>
        </div>

        <div className="home-learning-grid home-learning-grid-five">
          {featuredLearning.map((item) => (
            <Link
              to={`/learning/${item.slug}`}
              className="home-learning-card"
              key={item.slug}
            >
              <div className="learning-card-top">
                <div
                  className="learning-icon"
                  style={{ backgroundColor: item.accent }}
                >
                  {getLearningIcon(item.slug)}
                </div>
                <span className="learning-arrow">↗</span>
              </div>

              <p className="learning-status">{item.status}</p>
              <h3>{item.title}</h3>
              <p className="learning-description">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading home-section-heading-no-link">
          <span className="section-index">03</span>

          <div className="section-heading-copy">
            <h2>Tech Stack</h2>
            <p>
              Tools and technologies I use for building full-stack and
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
            <div className="tech-stack-item" key={tech}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{tech}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-bottom-layout">
        <div className="about-preview">
          <span className="section-number">04</span>

          <div className="about-preview-content">
            <p className="bottom-eyebrow">ABOUT ME</p>

            <h2>
              I like building things
              <br />
              that feel useful.
            </h2>

            <p>
              I&apos;m interested in full-stack development, AI applications,
              and turning ideas into practical products.
            </p>

            <Link to="/about" className="bottom-link">
              More about me →
            </Link>
          </div>
        </div>

        <div className="contact-preview">
          <span className="section-number">05</span>

          <div className="contact-preview-content">
            <p className="bottom-eyebrow">LET&apos;S CONNECT</p>

            <h2>
              Have something
              <br />
              interesting in mind?
            </h2>

            <p>
              I&apos;m always open to talking about software, AI, products,
              and interesting ideas.
            </p>

            <Link to="/contact" className="contact-button">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
