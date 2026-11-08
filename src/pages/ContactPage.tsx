import { Trans } from '../i18n/Language'
import './ContactPage.css'

function ContactPage() {
  return (
    <main className="contact-page">

      <section className="contact-hero">

        <p className="contact-eyebrow"><Trans text="Contact" /></p>

        <h1><Trans text="Have something" /><br /><Trans text="in mind?" /><br /><Trans text="Let's talk." /></h1>

        <p className="contact-intro"><Trans text="I'm open to software engineering, full-stack and AI application opportunities, as well as interesting projects and collaborations." /></p>

      </section>

      <section className="contact-links-section">

        <a
          href="mailto:your-email@example.com"
          className="contact-row"
        >
          <span className="contact-row-label"><Trans text="Email" /></span>

          <span className="contact-row-value"><Trans text="mruiecin@gmail.com" /></span>

          <span className="contact-row-arrow">
            ↗
          </span>
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-row"
        >
          <span className="contact-row-label"><Trans text="LinkedIn" /></span>

          <span className="contact-row-value"><Trans text="www.linkedin.com/in/mingrui-zhang-73b07a37b" /></span>

          <span className="contact-row-arrow">
            ↗
          </span>
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-row"
        >
          <span className="contact-row-label"><Trans text="GitHub" /></span>

          <span className="contact-row-value"><Trans text="See what I'm building" /></span>

          <span className="contact-row-arrow">
            ↗
          </span>
        </a>

      </section>

      <section className="contact-meta-section">

        <div className="contact-meta-item">
          <span><Trans text="Based in" /></span>

          <p><Trans text="Sydney, Australia" /></p>
        </div>

        <div className="contact-meta-item">
          <span><Trans text="Interested in" /></span>

          <p><Trans text="Software Engineering" /><br /><Trans text="Full-stack Development" /><br /><Trans text="AI Applications" /></p>
        </div>

        <div className="contact-meta-item">
          <span><Trans text="Currently" /></span>

          <p><Trans text="Building, learning and looking for the next thing worth working on." /></p>
        </div>

      </section>

      <section className="contact-ending">

        <p><Trans text="Thanks for stopping by." /></p>

        <h2><Trans text="See you somewhere" /><br /><Trans text="on the internet." /></h2>

      </section>

    </main>
  )
}

export default ContactPage