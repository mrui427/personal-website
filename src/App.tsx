import './App.css'
import dogImage from './assets/dog/mascot-duo.png'

function App() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-label">Hello, I'm</p>

          <h1>Mingrui Zhang</h1>

          <h2>
            Software Engineer
            <span> · Full Stack · AI Applications</span>
          </h2>

          <p className="hero-description">
            I build full-stack applications and explore how AI can be
            integrated into real products.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>

        <img
          src={dogImage}
          alt="Mingrui's dog mascot"
          className="dog-image"
        />
      </section>
    </main>
  )
}

export default App