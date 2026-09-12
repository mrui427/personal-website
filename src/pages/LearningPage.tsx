import { Link } from 'react-router-dom'
import { learningItems } from '../data/learning'
import './LearningPage.css'

function LearningPage() {
  return (
    <main className="learning-page">

      <section className="learning-hero">
        <p className="learning-eyebrow">
          Learning log · ongoing
        </p>

        <h1>
          Things I'm
          <br />
          figuring out.
        </h1>

        <p className="learning-intro">
          Notes from learning software engineering, AI,
          algorithms and everything around building better products.
        </p>
      </section>

      <section className="learning-grid">
        {learningItems.map((item, index) => (
          <Link
            key={item.slug}
            to={`/learning/${item.slug}`}
            className="learning-card"
          >
            <div
              className="learning-card-visual"
              style={{ backgroundColor: item.accent }}
            >
              <span className="learning-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="learning-status">
                {item.status}
              </span>

              <h2>{item.title}</h2>
            </div>

            <div className="learning-card-content">

              <p className="learning-category">
                {item.category}
              </p>

              <p className="learning-summary">
                {item.summary}
              </p>

              <div className="learning-topic-list">
                {item.topics.slice(0, 4).map((topic) => (
                  <span key={topic}>
                    {topic}
                  </span>
                ))}
              </div>

            </div>
          </Link>
        ))}
      </section>

    </main>
  )
}

export default LearningPage