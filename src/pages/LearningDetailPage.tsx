import { Link, useParams } from 'react-router-dom'
import { getLearningItemBySlug } from '../data/learning'
import './LearningDetailPage.css'

function LearningDetailPage() {
  const { slug } = useParams()

  const item = slug
    ? getLearningItemBySlug(slug)
    : undefined

  if (!item) {
    return (
      <main className="learning-detail-page">
        <p>Learning topic not found.</p>
        <Link to="/learning">
          ← Back to learning
        </Link>
      </main>
    )
  }

  return (
    <main className="learning-detail-page">

      <Link
        to="/learning"
        className="learning-back"
      >
        ← Learning
      </Link>

      <section className="learning-detail-hero">

        <p className="learning-detail-category">
          {item.category}
        </p>

        <h1>
          {item.title}
        </h1>

        <p className="learning-detail-subtitle">
          {item.subtitle}
        </p>

        <div className="learning-detail-meta">

          <div>
            <span>Status</span>
            <p>{item.status}</p>
          </div>

          <div>
            <span>Progress</span>
            <p>{item.progress}</p>
          </div>

        </div>

      </section>

      <section
        className="learning-detail-cover"
        style={{ backgroundColor: item.accent }}
      >
        <span>
          currently
          <br />
          learning
        </span>

        <h2>
          {item.title}
        </h2>
      </section>

      <section className="learning-detail-section">

        <p className="learning-section-label">
          01 / Why I'm learning this
        </p>

        <p className="learning-big-copy">
          {item.summary}
        </p>

      </section>

      <section className="learning-detail-section">

        <p className="learning-section-label">
          02 / Topics
        </p>

        <div className="learning-topics-grid">

          {item.topics.map((topic, index) => (
            <div
              key={topic}
              className="learning-topic-card"
            >
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              <p>{topic}</p>
            </div>
          ))}

        </div>

      </section>

      <section className="learning-detail-section">

        <p className="learning-section-label">
          03 / Notes to myself
        </p>

        <div className="learning-notes-list">

          {item.notes.map((note) => (
            <div
              key={note}
              className="learning-note"
            >
              <span>→</span>
              <p>{note}</p>
            </div>
          ))}

        </div>

      </section>

      <section className="learning-detail-footer">

        <p>
          Still learning.
        </p>

        <Link to="/learning">
          Explore another topic →
        </Link>

      </section>

    </main>
  )
}

export default LearningDetailPage