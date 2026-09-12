import './ContactPage.css'

function ContactPage() {
  return (
    <main className="contact-page">

      <section className="contact-hero">

        <p className="contact-eyebrow">
          Contact
        </p>

        <h1>
          Have something
          <br />
          in mind?
          <br />
          Let's talk.
        </h1>

        <p className="contact-intro">
          I'm open to software engineering, full-stack and AI application
          opportunities, as well as interesting projects and collaborations.
        </p>

      </section>

      <section className="contact-links-section">

        <a
          href="mailto:your-email@example.com"
          className="contact-row"
        >
          <span className="contact-row-label">
            Email
          </span>

          <span className="contact-row-value">
            your-email@example.com
          </span>

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
          <span className="contact-row-label">
            LinkedIn
          </span>

          <span className="contact-row-value">
            Let's connect
          </span>

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
          <span className="contact-row-label">
            GitHub
          </span>

          <span className="contact-row-value">
            See what I'm building
          </span>

          <span className="contact-row-arrow">
            ↗
          </span>
        </a>

      </section>

      <section className="contact-meta-section">

        <div className="contact-meta-item">
          <span>Based in</span>

          <p>
            Sydney, Australia
          </p>
        </div>

        <div className="contact-meta-item">
          <span>Interested in</span>

          <p>
            Software Engineering
            <br />
            Full-stack Development
            <br />
            AI Applications
          </p>
        </div>

        <div className="contact-meta-item">
          <span>Currently</span>

          <p>
            Building, learning and looking for
            the next thing worth working on.
          </p>
        </div>

      </section>

      <section className="contact-ending">

        <p>
          Thanks for stopping by.
        </p>

        <h2>
          See you somewhere
          <br />
          on the internet.
        </h2>

      </section>

    </main>
  )
}

export default ContactPage