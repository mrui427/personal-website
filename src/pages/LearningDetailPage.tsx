import { Trans } from '../i18n/Language'
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
        <p><Trans text="Learning topic not found." /></p>
        <Link to="/learning"><Trans text="← Back to learning" /></Link>
      </main>
    )
  }

  return (
    <main className="learning-detail-page">

      <Link
        to="/learning"
        className="learning-back"
      ><Trans text="← Learning" /></Link>

      <section className="learning-detail-hero">

        <p className="learning-detail-category">
          <Trans text={item.category} />
        </p>

        <h1>
          <Trans text={item.title} />
        </h1>

        <p className="learning-detail-subtitle">
          <Trans text={item.subtitle} />
        </p>

        <div className="learning-detail-meta">

          <div>
            <span><Trans text="Status" /></span>
            <p><Trans text={item.status} /></p>
          </div>

          <div>
            <span><Trans text="Progress" /></span>
            <p><Trans text={item.progress} /></p>
          </div>

        </div>

      </section>

      <section
        className="learning-detail-cover"
        style={{ backgroundColor: item.accent }}
      >
        <span><Trans text="currently" /><br /><Trans text="learning" /></span>

        <h2>
          <Trans text={item.title} />
        </h2>
      </section>

      <section className="learning-detail-section">

        <p className="learning-section-label"><Trans text="01 / Why I'm learning this" /></p>

        <p className="learning-big-copy">
          <Trans text={item.summary} />
        </p>

      </section>

      <section className="learning-detail-section">

        <p className="learning-section-label"><Trans text="02 / Topics" /></p>

        <div className="learning-topics-grid">

          {item.topics.map((topic, index) => (
            <div
              key={topic}
              className="learning-topic-card"
            >
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              <p><Trans text={topic === 'Stack' ? 'Data structure stack' : topic} /></p>
            </div>
          ))}

        </div>

      </section>

      <section className="learning-detail-section">

        <p className="learning-section-label"><Trans text="03 / Notes to myself" /></p>

        <div className="learning-notes-list">

          {item.notes.map((note) => (
            <div
              key={note}
              className="learning-note"
            >
              <span>→</span>
              <p><Trans text={note} /></p>
            </div>
          ))}

        </div>

      </section>

      <section className="learning-detail-footer">

        <p><Trans text="Still learning." /></p>

        <Link to="/learning"><Trans text="Explore another topic →" /></Link>

      </section>

    </main>
  )
}

export default LearningDetailPage