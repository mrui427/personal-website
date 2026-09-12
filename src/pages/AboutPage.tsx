import './AboutPage.css'

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="about-eyebrow">
          About me
        </p>

        <h1>
          Developer,
          <br />
          builder &
          <br />
          constant learner.
        </h1>

        <div className="about-hero-bottom">
          <p>
            I'm Mingrui, a Computer Science graduate based in Sydney.
            I like building full-stack products and exploring how AI
            can become part of real applications.
          </p>

          <span>
            Sydney, Australia
          </span>
        </div>
      </section>

      <section className="about-intro-section">
        <p className="about-section-label">
          01 / A little about me
        </p>

        <div className="about-large-copy">
          I enjoy turning ideas into things people can actually use.
          Most of my recent work sits somewhere between
          <span> software engineering</span>,
          <span> product thinking</span> and
          <span> AI applications</span>.
        </div>
      </section>

      <section className="about-two-column">
        <div>
          <p className="about-section-label">
            02 / What I build
          </p>

          <p className="about-body-copy">
            I mainly work on full-stack web applications using React
            and TypeScript on the frontend, with backend APIs,
            databases and authentication behind them.
          </p>

          <p className="about-body-copy">
            Recently I've been especially interested in integrating
            LLMs into traditional software products rather than
            treating AI as a standalone demo.
          </p>
        </div>

        <div>
          <p className="about-section-label">
            03 / How I learn
          </p>

          <p className="about-body-copy">
            I learn best by building. Instead of studying a technology
            in isolation for too long, I usually try to use it inside
            a real project and understand the architecture around it.
          </p>

          <p className="about-body-copy">
            That currently means algorithms, backend architecture,
            deployment, Docker and AI engineering.
          </p>
        </div>
      </section>

      <section className="about-stack-section">
        <p className="about-section-label">
          04 / Things I work with
        </p>

        <div className="about-stack-grid">
          <div className="about-stack-group">
            <span>Frontend</span>

            <h3>
              React
              <br />
              TypeScript
              <br />
              Vite
              <br />
              Next.js
            </h3>
          </div>

          <div className="about-stack-group">
            <span>Backend</span>

            <h3>
              NestJS
              <br />
              Node.js
              <br />
              REST APIs
              <br />
              JWT
            </h3>
          </div>

          <div className="about-stack-group">
            <span>Data</span>

            <h3>
              PostgreSQL
              <br />
              Prisma
              <br />
              SQL
              <br />
              Redis
            </h3>
          </div>

          <div className="about-stack-group">
            <span>AI</span>

            <h3>
              LLMs
              <br />
              Prompting
              <br />
              Structured Output
              <br />
              LangChain
            </h3>
          </div>
        </div>
      </section>

      <section className="about-now-section">
        <p className="about-section-label">
          05 / Right now
        </p>

        <div className="about-now-grid">
          <div className="about-now-item">
            <span>Building</span>
            <p>
              SmartNail — a full-stack booking platform for nail artists
              and customers.
            </p>
          </div>

          <div className="about-now-item">
            <span>Learning</span>
            <p>
              Docker, deployment, algorithms and AI engineering.
            </p>
          </div>

          <div className="about-now-item">
            <span>Exploring</span>
            <p>
              How AI agents and traditional software systems can work
              together inside useful products.
            </p>
          </div>

          <div className="about-now-item">
            <span>Improving</span>
            <p>
              Technical communication, spoken English and explaining
              complex ideas more clearly.
            </p>
          </div>
        </div>
      </section>

      <section className="about-timeline-section">
        <p className="about-section-label">
          06 / A very short timeline
        </p>

        <div className="about-timeline">
          <div className="about-timeline-item">
            <span>2023</span>

            <div>
              <h3>
                Finished my undergraduate degree
              </h3>

              <p>
                Started moving more seriously into software,
                programming and computer science.
              </p>
            </div>
          </div>

          <div className="about-timeline-item">
            <span>2024—2026</span>

            <div>
              <h3>
                Master of Computer Science
              </h3>

              <p>
                Studied software engineering, algorithms, databases,
                machine learning and web development at the
                University of Sydney.
              </p>
            </div>
          </div>

          <div className="about-timeline-item">
            <span>2026</span>

            <div>
              <h3>
                Building more seriously
              </h3>

              <p>
                Full-stack applications, AI-assisted products,
                deployment and the engineering skills around them.
              </p>
            </div>
          </div>

          <div className="about-timeline-item">
            <span>Next</span>

            <div>
              <h3>
                Software + AI
              </h3>

              <p>
                I want to keep building real products and grow toward
                software and AI application engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-ending">
        <p>
          I don't think I have everything figured out yet.
        </p>

        <h2>
          I'm just trying to keep
          <br />
          building better things.
        </h2>
      </section>
    </main>
  )
}

export default AboutPage