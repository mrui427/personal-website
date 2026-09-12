import { Link, useParams } from 'react-router-dom'
import { getNoteBySlug } from '../data/notes'
import './NoteDetailPage.css'

function NoteDetailPage() {
  const { slug } = useParams()

  const note = slug
    ? getNoteBySlug(slug)
    : undefined

  if (!note) {
    return (
      <main className="note-detail-page">
        <p>Note not found.</p>

        <Link to="/notes">
          ← Back to notes
        </Link>
      </main>
    )
  }

  return (
    <main className="note-detail-page">
      <Link
        to="/notes"
        className="note-back"
      >
        ← Notes
      </Link>

      <article className="note-article">
        <header className="note-detail-header">
          <p className="note-detail-category">
            {note.category}
          </p>

          <h1>
            {note.title}
          </h1>

          <div className="note-detail-meta">
            <span>{note.date}</span>

            <span>
              {note.tags.join(' · ')}
            </span>
          </div>
        </header>

        <section className="note-intro">
          <p>
            {note.excerpt}
          </p>
        </section>

        <section className="note-content">
          {note.content.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </section>

        <section className="note-tags">
          {note.tags.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}
        </section>
      </article>

      <footer className="note-detail-footer">
        <p>
          End of note.
        </p>

        <Link to="/notes">
          More notes →
        </Link>
      </footer>
    </main>
  )
}

export default NoteDetailPage