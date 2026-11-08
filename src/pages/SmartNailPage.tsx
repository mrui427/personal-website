import { Trans } from '../i18n/Language'
import { Link } from 'react-router-dom'
import cover from '../assets/projects/smartnail-cover.png'
import './ProjectDetailPage.css'
import './StaticProjectPage.css'

function SmartNailPage() {
  return (
    <main className="project-detail-page static-project-page">
      <Link to="/projects" className="project-back"><Trans text="← All projects" /></Link>

      <header className="project-detail-hero">
        <div className="project-detail-heading">
          <p className="project-detail-category"><Trans text="Personal Project · Mar 2026 – Present" /></p>
          <h1><Trans text="SmartNail" /></h1>
          <p className="project-detail-subtitle"><Trans text="A clearer way to discover nail artists and book an appointment." /></p>
        </div>
        <div className="project-detail-meta">
          <div><span><Trans text="Role" /></span><p><Trans text="Full-stack Developer" /></p></div>
          <div><span><Trans text="Type" /></span><p><Trans text="Personal project" /></p></div>
          <div><span><Trans text="Stack" /></span><p><Trans text="React, TypeScript, NestJS, PostgreSQL, Prisma, JWT" /></p></div>
        </div>
      </header>

      <section className="project-cover project-cover-with-image" aria-label="SmartNail project cover">
        <img className="project-cover-image" src={cover} alt="SmartNail booking platform cover" />
      </section>

      <section className="project-section">
        <p className="project-section-label"><Trans text="01 / Overview" /></p>
        <h2 className="project-large-copy"><Trans text="From scattered messages to a structured booking experience." /></h2>
        <p className="static-project-copy"><Trans text="SmartNail is a personal full-stack project shaped by conversations with nail professionals in China and Australia. I planned a two-role MVP that replaces scattered messages and manual records with clear customer booking and artist scheduling workflows." /></p>
      </section>

      <section className="project-two-column">
        <div className="project-info-block">
          <p className="project-section-label"><Trans text="02 / The problem" /></p>
          <h2><Trans text="Booking takes too much back-and-forth." /></h2>
          <p><Trans text="Small nail businesses often arrange appointments through social media messages. Customers need to ask about availability, while artists have to keep track of requests and schedules manually. Information becomes scattered, and confirming a booking takes more effort than it should." /></p>
        </div>
        <div className="project-info-block">
          <p className="project-section-label"><Trans text="03 / The approach" /></p>
          <h2><Trans text="Make the next step clear for both sides." /></h2>
          <p><Trans text="I built a shared platform with separate experiences for customers and artists. Customers can discover artists, view their profiles and choose available time slots. Artists can manage their profiles, availability and incoming appointments in one structured workflow." /></p>
        </div>
      </section>

      <section className="project-section">
        <p className="project-section-label"><Trans text="04 / Product experience" /></p>
        <div className="project-feature-grid">
          <article className="project-feature-card"><span><Trans text="01 / Discover" /></span><h3><Trans text="Find a nail artist" /></h3><p><Trans text="Browse artist listings and open a detailed profile before deciding who to book with." /></p></article>
          <article className="project-feature-card"><span><Trans text="02 / Book" /></span><h3><Trans text="Create or cancel an appointment" /></h3><p><Trans text="View available slots, book an appointment and manage cancellations through a dedicated booking flow." /></p></article>
          <article className="project-feature-card"><span><Trans text="03 / Manage" /></span><h3><Trans text="Keep availability organised" /></h3><p><Trans text="Give artists a dedicated experience for managing their profiles, schedules and incoming bookings." /></p></article>
          <article className="project-feature-card"><span><Trans text="04 / Access" /></span><h3><Trans text="Support different roles" /></h3><p><Trans text="Use registration, login and JWT authentication to connect customer and artist experiences with role-based access." /></p></article>
        </div>
      </section>

      <section className="project-section">
        <p className="project-section-label"><Trans text="05 / Engineering" /></p>
        <h2 className="static-project-section-title"><Trans text="Connecting the interface to the booking logic." /></h2>
        <div className="project-learning-grid">
          <article><h3><Trans text="Frontend · React & TypeScript" /></h3><p><Trans text="I planned 10 functional pages around customer and artist workflows, including artist discovery, profiles and booking." /></p></article>
          <article><h3><Trans text="Backend · NestJS" /></h3><p><Trans text="I built 22 backend APIs for authentication, artist profiles, portfolios, appointments and availability management." /></p></article>
          <article><h3><Trans text="Data · PostgreSQL & Prisma" /></h3><p><Trans text="The relational schema connects users, artists, availability and appointments. Prisma provides the link between the backend and stored booking data." /></p></article>
          <article><h3><Trans text="Validation · Booking rules" /></h3><p><Trans text="Appointment creation and cancellation use availability and appointment start and end times to validate schedules and prevent conflicts." /></p></article>
        </div>
      </section>

      <section className="project-section">
        <p className="project-section-label"><Trans text="06 / My contribution" /></p>
        <ol className="static-project-contributions">
          <li><Trans text="Talked with nail professionals in China and Australia to understand appointment and scheduling needs." /></li>
          <li><Trans text="Planned a two-role MVP with 10 functional pages and documented business workflows." /></li>
          <li><Trans text="Built 22 NestJS APIs for authentication, artist information, portfolios, appointments and availability." /></li>
          <li><Trans text="Implemented appointment creation, cancellation and schedule-conflict validation." /></li>
          <li><Trans text="Deployed the system and continued frontend-to-backend integration." /></li>
        </ol>
      </section>

      <section className="project-section">
        <p className="project-section-label"><Trans text="08 / Exploring next" /></p>
        <h2 className="static-project-section-title"><Trans text="Reduce manual scheduling with an AI assistant." /></h2>
        <p className="static-project-copy"><Trans text="I am exploring an AI Agent workflow that could turn natural-language requests or chat screenshots into appointment details and draft schedule records. This is a planned direction, not a shipped feature." /></p>
      </section>

      <section className="project-section project-learning-section">
        <p className="project-section-label"><Trans text="07 / What I learned" /></p>
        <h2><Trans text="A booking flow is only as good as the system behind it." /></h2>
        <div className="project-learning-grid">
          <p><Trans text="Building across the frontend, backend and database helped me understand how a single product decision affects every layer of an application." /></p>
          <p><Trans text="Separating customer and artist workflows made authentication and authorisation part of the product design, as well as the implementation." /></p>
          <p><Trans text="Modelling availability and appointments strengthened my understanding of relational data and the rules that connect it." /></p>
          <p><Trans text="Taking the project from interface design to working APIs taught me how to break a larger application into manageable features." /></p>
        </div>
      </section>

      <footer className="project-detail-footer">
        <p><Trans text="More things I've made" /></p>
        <Link to="/projects"><Trans text="View all projects →" /></Link>
      </footer>
    </main>
  )
}

export default SmartNailPage
