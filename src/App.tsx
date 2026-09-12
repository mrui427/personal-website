import './App.css'
import runDogsImage from './assets/dog/815dea1c-7ca6-43b5-82d2-9ab5f82071f1.png'
import heroSceneImage from './assets/dog/c815d4ae-b98d-4d10-a167-c2b2da33c912.png'
import peekDogsImage from './assets/dog/906165a5-ed43-410d-b4b7-d491a5878ee2.png'
import sleepyDogsImage from './assets/dog/977f4260-d2c8-4723-9ebc-3fa3c45cb420.png'
import waveDogsImage from './assets/dog/c0e2eba3-aa0f-4422-964b-066b0dbe2c2e.png'

const projects = [
  {
    icon: 'nail',
    title: 'SmartNail',
    description:
      'An AI-assisted nail booking platform that connects customers with nail salons, with smart recommendations and a smooth booking experience.',
    tags: ['React', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL'],
  },
  {
    icon: 'chart',
    title: 'AI Visibility Analytics',
    description:
      'A full-stack analytics platform for structured ad analysis and dashboards, helping businesses understand their visibility across AI-powered search and platforms.',
    tags: ['React', 'Python', 'NestJS', 'PostgreSQL', 'Data Analytics'],
  },
  {
    icon: 'flask',
    title: 'Learning Sandbox',
    description:
      'A collection of small experiments, including LeetCode practice, full-stack development, and AI integrations. A space to learn, explore and try new ideas.',
    tags: ['JavaScript', 'React', 'Python', 'LeetCode', 'AI Experiments'],
  },
]

const learning = [
  ['book', 'LeetCode', 'Practicing consistently to improve problem-solving skills.'],
  ['screen', 'Full-stack Development', 'Building end-to-end web applications with modern tech stacks.'],
  ['ship', 'Docker', 'Learning containerization for easier development and deployment.'],
  ['grid', 'System Design Basics', 'Understanding scalable system design and architecture principles.'],
  ['brain', 'AI Application Building', 'Exploring LLMs, prompt engineering, and real-world AI product development.'],
]

const techStack = [
  ['⚛', 'React'],
  ['TS', 'TypeScript'],
  ['🐍', 'Python'],
  ['🦁', 'NestJS'],
  ['🐘', 'PostgreSQL'],
  ['△', 'Prisma'],
  ['JS', 'JavaScript'],
  ['◆', 'Git'],
]

const notes = [
  ['Setting Up a Full-Stack Project with NextJS and React', 'Apr 20, 2025', 'A step-by-step guide to setting up a modern full-stack project with a clean structure.'],
  ['What I Learned from Building with LLMs', 'Apr 12, 2025', 'Some practical lessons and unexpected insights from recent AI integration experiments.'],
  ['My LeetCode Journey', 'Apr 5, 2025', 'Reflection on my progress, favorite problems, and how I stay consistent.'],
]

function ProjectIcon({ type }: { type: string }) {
  return <span className={`project-icon project-icon-${type}`} aria-hidden="true" />
}

function App() {
  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Baicai home">
          Baicai
          <span className="leaf" aria-hidden="true" />
        </a>

        <nav aria-label="Primary navigation">
          <a className="active" href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#learning">Learning</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="icon-button" aria-label="Search">
          ⌕
        </button>
      </header>

      <section id="home" className="hero-section">
        <img src={peekDogsImage} alt="" className="dog-sticker hero-pup hero-pup-left" />
        <img src={waveDogsImage} alt="" className="dog-sticker hero-pup hero-pup-right" />

        <div className="hero-copy">
          <p className="eyebrow">Build · Learn · Share</p>
          <h1>
            Hi, I&apos;m
            <span>Mingrui Zhang</span>
          </h1>
          <p className="nickname">( Baicai )</p>
          <p className="role-line">AI software engineer | Full-stack builder | Learning in public</p>
          <p className="intro">
            I build practical AI-enabled web applications and document my learning journey along the way. Also known as Baicai ♡
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              View Projects <span aria-hidden="true">→</span>
            </a>
            <a className="secondary-action" href="#notes">
              <span aria-hidden="true">▣</span> Learning Notes
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Sketch style workspace illustration">
          <img src={heroSceneImage} alt="" className="hero-scene" />
          <div className="sticky-note note-left">A<br />Better<br />Version<br />of Myself ♡</div>
          <div className="sticky-note note-right">Good<br />Ideas<br />Brighter<br />Tomorrow ♡</div>
        </div>

        <p className="scribble scribble-left">Small steps<br />Everyday ♡</p>
        <p className="scribble scribble-right">Good Ideas<br />Brighter<br />Tomorrow ♡</p>
      </section>

      <section id="projects" className="content-section">
        <div className="section-heading">
          <span className="section-number">01</span>
          <h2>Selected Projects</h2>
          <p>Some things I&apos;ve built, with a focus on real-world problems and practical solutions.</p>
          <a href="#projects">View all projects →</a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="card-topline">
                <ProjectIcon type={project.icon} />
                <button className="round-link" aria-label={`Open ${project.title}`}>→</button>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="learning" className="content-section learning-section">
        <img src={runDogsImage} alt="" className="dog-sticker learning-dogs" />

        <div className="section-heading">
          <span className="section-number">02</span>
          <h2>What I&apos;m Learning</h2>
          <p>Learning never stops. Here are some areas I&apos;m currently exploring.</p>
        </div>

        <div className="learning-grid">
          {learning.map(([icon, title, description]) => (
            <article className="learning-card" key={title}>
              <span className={`line-icon line-icon-${icon}`} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="scribble learning-scribble">Same Progress<br />is Still Progress ♡</p>
      </section>

      <section id="about" className="tech-section">
        <div className="section-heading compact">
          <span className="section-number">03</span>
          <h2>Tech Stack</h2>
          <p>Tools I use and enjoy working with.</p>
        </div>

        <div className="tech-list">
          {techStack.map(([icon, label]) => (
            <span className="tech-pill" key={label}>
              <b>{icon}</b>
              {label}
            </span>
          ))}
        </div>
      </section>

      <section id="notes" className="content-section notes-section">
        <img src={waveDogsImage} alt="" className="dog-sticker notes-pup" />

        <div className="section-heading">
          <span className="section-number">04</span>
          <h2>Latest Notes</h2>
          <p>Thoughts, learnings, and small discoveries.</p>
          <a href="#notes">View all notes →</a>
        </div>

        <div className="notes-grid">
          {notes.map(([title, date, description]) => (
            <article className="note-card" key={title}>
              <span className="paper-icon" aria-hidden="true">▤</span>
              <div>
                <h3>{title}</h3>
                <time>{date}</time>
                <p>{description}</p>
              </div>
              <button className="round-link" aria-label={`Read ${title}`}>→</button>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="footer-garden" aria-hidden="true">
          <span className="flower flower-one" />
          <span className="flower flower-two" />
          <img src={sleepyDogsImage} alt="" />
          <p>Build useful things.<br />Stay curious. Be kind. ♡</p>
        </div>
        <div className="footer-bar">
          <div>
            <strong>Mingrui Zhang (Baicai)</strong>
            <span>AI software engineer · Building a brighter, kinder future with technology.</span>
          </div>
          <div className="socials" aria-label="Social links">
            <a href="https://github.com" aria-label="GitHub">Git</a>
            <a href="https://linkedin.com" aria-label="LinkedIn">in</a>
            <a href="mailto:hello@example.com" aria-label="Email">@</a>
            <a href="#home" aria-label="Back to top">X</a>
          </div>
          <p>Let&apos;s build something good together. ♡</p>
        </div>
      </footer>
    </main>
  )
}

export default App
