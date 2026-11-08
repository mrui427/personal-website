import { Trans } from '../i18n/Language'
import './AboutPage.css'

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="about-eyebrow"><Trans text="About me" /></p>

        <h1><Trans text="Developer," /><br /><Trans text="builder &" /><br /><Trans text="constant learner." /></h1>

        <div className="about-hero-bottom">
          <p><Trans text="I'm Mingrui, a Computer Science graduate based in Sydney. I like building full-stack products and exploring how AI can become part of real applications." /></p>

          <span><Trans text="Sydney, Australia" /></span>
        </div>
      </section>

      <section className="about-intro-section">
        <p className="about-section-label"><Trans text="01 / A little about me" /></p>

        <div className="about-large-copy"><Trans text="I enjoy turning ideas into things people can actually use. Most of my recent work sits somewhere between" /><span><Trans text=" software engineering" /></span>,
          <span><Trans text=" product thinking" /></span><Trans text=" and" /><span><Trans text=" AI applications" /></span>.
        </div>
      </section>

      <section className="about-two-column">
        <div>
          <p className="about-section-label"><Trans text="02 / What I build" /></p>

          <p className="about-body-copy"><Trans text="I mainly work on full-stack web applications using React and TypeScript on the frontend, with backend APIs, databases and authentication behind them." /></p>

          <p className="about-body-copy"><Trans text="Recently I've been especially interested in integrating LLMs into traditional software products rather than treating AI as a standalone demo." /></p>
        </div>

        <div>
          <p className="about-section-label"><Trans text="03 / How I learn" /></p>

          <p className="about-body-copy"><Trans text="I learn best by building. Instead of studying a technology in isolation for too long, I usually try to use it inside a real project and understand the architecture around it." /></p>

          <p className="about-body-copy"><Trans text="That currently means algorithms, backend architecture, deployment, Docker and AI engineering." /></p>
        </div>
      </section>

      <section className="about-stack-section">
        <p className="about-section-label"><Trans text="04 / Things I work with" /></p>

        <div className="about-stack-grid">
          <div className="about-stack-group">
            <span><Trans text="Frontend" /></span>

            <h3><Trans text="React" /><br /><Trans text="TypeScript" /><br /><Trans text="Vite" /><br /><Trans text="Next.js" /></h3>
          </div>

          <div className="about-stack-group">
            <span><Trans text="Backend" /></span>

            <h3><Trans text="NestJS" /><br /><Trans text="Node.js" /><br /><Trans text="REST APIs" /><br /><Trans text="JWT" /></h3>
          </div>

          <div className="about-stack-group">
            <span><Trans text="Data" /></span>

            <h3><Trans text="PostgreSQL" /><br /><Trans text="Prisma" /><br /><Trans text="SQL" /><br /><Trans text="Redis" /></h3>
          </div>

          <div className="about-stack-group">
            <span><Trans text="AI" /></span>

            <h3><Trans text="LLMs" /><br /><Trans text="Prompting" /><br /><Trans text="Structured Output" /><br /><Trans text="LangChain" /></h3>
          </div>
        </div>
      </section>

      <section className="about-now-section">
        <p className="about-section-label"><Trans text="05 / Right now" /></p>

        <div className="about-now-grid">
          <div className="about-now-item">
            <span><Trans text="Building" /></span>
            <p><Trans text="SmartNail — a full-stack booking platform for nail artists and customers." /></p>
          </div>

          <div className="about-now-item">
            <span><Trans text="Learning" /></span>
            <p><Trans text="Docker, deployment, algorithms and AI engineering." /></p>
          </div>

          <div className="about-now-item">
            <span><Trans text="Exploring" /></span>
            <p><Trans text="How AI agents and traditional software systems can work together inside useful products." /></p>
          </div>

          <div className="about-now-item">
            <span><Trans text="Improving" /></span>
            <p><Trans text="Technical communication, spoken English and explaining complex ideas more clearly." /></p>
          </div>
        </div>
      </section>

      <section className="about-timeline-section">
        <p className="about-section-label"><Trans text="06 / A very short timeline" /></p>

        <div className="about-timeline">
          <div className="about-timeline-item">
            <span>2023</span>

            <div>
              <h3><Trans text="Finished my undergraduate degree" /></h3>

              <p><Trans text="Started moving more seriously into software, programming and computer science." /></p>
            </div>
          </div>

          <div className="about-timeline-item">
            <span>2024—2026</span>

            <div>
              <h3><Trans text="Master of Computer Science" /></h3>

              <p><Trans text="Studied software engineering, algorithms, databases, machine learning and web development at the University of Sydney." /></p>
            </div>
          </div>

          <div className="about-timeline-item">
            <span>2026</span>

            <div>
              <h3><Trans text="Building more seriously" /></h3>

              <p><Trans text="Full-stack applications, AI-assisted products, deployment and the engineering skills around them." /></p>
            </div>
          </div>

          <div className="about-timeline-item">
            <span><Trans text="Next" /></span>

            <div>
              <h3><Trans text="Software + AI" /></h3>

              <p><Trans text="I want to keep building real products and grow toward software and AI application engineering." /></p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-ending">
        <p><Trans text="I don't think I have everything figured out yet." /></p>

        <h2><Trans text="I'm just trying to keep" /><br /><Trans text="building better things." /></h2>
      </section>
    </main>
  )
}

export default AboutPage