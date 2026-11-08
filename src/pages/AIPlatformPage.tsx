import { Trans } from '../i18n/Language'
import { Link } from 'react-router-dom'
import cover from '../assets/projects/ai-platform-cover.png'
import './ProjectDetailPage.css'
import './StaticProjectPage.css'

function AIPlatformPage() {
  return (
    <main className="project-detail-page static-project-page">
      <Link to="/projects" className="project-back"><Trans text="← All projects" /></Link>

      <header className="project-detail-hero">
        <div className="project-detail-heading">
          <p className="project-detail-category"><Trans text="Aeoflo Internship · AI Advertising Analysis · Feb–Jun 2026" /></p>
          <h1><Trans text="AI Visibility Analytics" /></h1>
          <p className="project-detail-subtitle"><Trans text="Turning advertising data into structured insights and interactive reports." /></p>
        </div>
        <div className="project-detail-meta">
          <div><span><Trans text="Role" /></span><p><Trans text="Requirements Analysis · Product Design · Technical Delivery" /></p></div>
          <div><span><Trans text="Team" /></span><p><Trans text="8-person Agile team · 12 client meetings" /></p></div>
          <div><span><Trans text="Stack" /></span><p><Trans text="React, TypeScript, RESTful APIs, Figma, LLM Prompting" /></p></div>
        </div>
      </header>

      <section className="project-cover project-cover-with-image" aria-label="AI Visibility Analytics project cover">
        <img className="project-cover-image" src={cover} alt="AI Visibility Analytics dashboard" />
      </section>

      <section className="project-section">
        <p className="project-section-label"><Trans text="01 / Overview" /></p>
        <h2 className="project-large-copy"><Trans text="Make advertising research easier to search, compare and reuse." /></h2>
        <p className="static-project-copy"><Trans text="At Aeoflo, I worked in an eight-person Agile team on an AI advertising analysis platform for an external client. I contributed across requirements analysis, product design, frontend delivery and AI output testing, from client discussions through integration and acceptance." /></p>
      </section>

      <section className="project-two-column">
        <div className="project-info-block">
          <p className="project-section-label"><Trans text="02 / The problem" /></p>
          <h2><Trans text="Research was spread across offline reports." /></h2>
          <p><Trans text="The client relied on offline PDF analysis and manual workflows. Finding information and comparing Keyword and Brand reports meant working across separate documents, making insights difficult to search, compare and reuse." /></p>
        </div>
        <div className="project-info-block">
          <p className="project-section-label"><Trans text="03 / The approach" /></p>
          <h2><Trans text="Connect collection, analysis and reporting." /></h2>
          <p><Trans text="I joined 12 client meetings and helped clarify the Dashboard, Report, Portfolio and Scan requirements. For a disagreement over Keyword and Brand report presentation, I proposed two prototype options; the accepted solution unified the presentation while keeping the analysis content distinct." /></p>
        </div>
      </section>

      <section className="project-section">
        <p className="project-section-label"><Trans text="04 / Product experience" /></p>
        <div className="project-feature-grid">
          <article className="project-feature-card"><span><Trans text="01 / Scan" /></span><h3><Trans text="Start a new analysis" /></h3><p><Trans text="The New Scan page provides the entry point to the advertising analysis workflow, which processes advertising images and text." /></p></article>
          <article className="project-feature-card"><span><Trans text="02 / Structure" /></span><h3><Trans text="Extract useful attributes" /></h3><p><Trans text="Combine OCR with LLM analysis to extract structured information from advertising images and text, then store the results for later use." /></p></article>
          <article className="project-feature-card"><span><Trans text="03 / Explore" /></span><h3><Trans text="Navigate interactive reports" /></h3><p><Trans text="Dashboard and Reports pages present API results as an online analysis experience, bringing stored findings into a format the client can explore." /></p></article>
          <article className="project-feature-card"><span><Trans text="04 / Organise" /></span><h3><Trans text="Work across the platform" /></h3><p><Trans text="Portfolio and Settings pages support the broader product experience alongside scanning, dashboards and reporting." /></p></article>
        </div>
      </section>

      <section className="project-section">
        <p className="project-section-label"><Trans text="05 / Engineering" /></p>
        <h2 className="static-project-section-title"><Trans text="Making AI output usable inside a product." /></h2>
        <div className="project-learning-grid">
          <article><h3><Trans text="Product design · Figma" /></h3><p><Trans text="I translated client requirements into 8–10 page and interaction prototypes, supported by functional proposals, workflows and progress presentations." /></p></article>
          <article><h3><Trans text="Frontend · React & TypeScript" /></h3><p><Trans text="I independently delivered 11 frontend pages for Dashboard, Report, Portfolio and Scan workflows, connecting the interfaces to backend data." /></p></article>
          <article><h3><Trans text="Integration · RESTful APIs" /></h3><p><Trans text="I integrated 14 RESTful API endpoints and coordinated field and response-structure changes when backend data did not match frontend expectations." /></p></article>
          <article><h3><Trans text="AI · Prompt evaluation" /></h3><p><Trans text="Using fixed advertising samples, I compared extracted brands, product categories and advertising claims, checking accuracy, consistency and fabricated content before refining prompts." /></p></article>
        </div>
      </section>

      <section className="project-section">
        <p className="project-section-label"><Trans text="06 / My contribution" /></p>
        <ol className="static-project-contributions">
          <li><Trans text="Translated client requirements into 8–10 Figma pages and interaction prototypes." /></li>
          <li><Trans text="Independently delivered 11 frontend pages and integrated 14 RESTful API endpoints." /></li>
          <li><Trans text="Clarified API fields and coordinated frontend adaptations to backend response structures." /></li>
          <li><Trans text="Tested fixed advertising samples and refined prompts for structured extraction quality." /></li>
          <li><Trans text="Joined 12 client meetings to clarify requirements, report progress and raise issues." /></li>
          <li><Trans text="Supported integration testing, deployment and client acceptance." /></li>
        </ol>
      </section>

      <section className="project-two-column">
        <div className="project-info-block">
          <p className="project-section-label"><Trans text="07 / Collaboration" /></p>
          <h2><Trans text="Build with the client, week by week." /></h2>
          <p><Trans text="Across 12 client meetings, I helped clarify requirements, report progress and resolve issues. By presenting two prototype options for the Keyword and Brand report differences, I helped the client agree on a consistent display format with distinct analysis content." /></p>
        </div>
        <div className="project-info-block">
          <p className="project-section-label"><Trans text="MVP deployment" /></p>
          <h2><Trans text="Bring the pieces into a working MVP." /></h2>
          <p><Trans text="At the end of the project, the team used Docker for MVP deployment. This brought the interface, backend and analysis workflow together and gave me experience with how frontend work fits into a deployed application." /></p>
        </div>
      </section>

      <section className="project-section project-learning-section">
        <p className="project-section-label"><Trans text="08 / What I learned" /></p>
        <h2><Trans text="AI insights need structure before they can support a useful interface." /></h2>
        <div className="project-learning-grid">
          <p><Trans text="Working from a client brief taught me how to turn broad business needs into concrete screens, workflows and development tasks." /></p>
          <p><Trans text="LLM integration showed me why generated output needs a clear structure, validation and iteration before an application can rely on it." /></p>
          <p><Trans text="Building across frontend, backend and AI boundaries strengthened my ability to communicate data requirements and coordinate interfaces with the team." /></p>
          <p><Trans text="Working with an external client taught me how to explain progress, clarify requirements and connect implementation decisions to the research workflow." /></p>
        </div>
      </section>

      <footer className="project-detail-footer">
        <p><Trans text="More things I've made" /></p>
        <Link to="/projects"><Trans text="View all projects →" /></Link>
      </footer>
    </main>
  )
}

export default AIPlatformPage
