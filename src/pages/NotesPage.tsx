import { Link } from 'react-router-dom'
import { notes } from '../data/notes'
import './NotesPage.css'

function NotesPage() {
  return (
    <main className="notes-page">
      <section className="notes-hero">
        <p className="notes-eyebrow">
          Notes · thoughts · things worth keeping
        </p>

        <h1>
          Small things
          <br />
          I don't want to forget.
        </h1>

        <p>
          Short notes from coding, learning and building things.
          Mostly written while I'm trying to understand something properly.
        </p>
      </section>

      <section className="notes-list">
        {notes.map((note, index) => (
          <Link
            key={note.slug}
            to={`/notes/${note.slug}`}
            className="note-row"
          >
            <div className="note-row-index">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="note-row-date">
              {note.date}
            </div>

            <div className="note-row-main">
              <p className="note-category">
                {note.category}
              </p>

              <h2>{note.title}</h2>

              <p className="note-excerpt">
                {note.excerpt}
              </p>
            </div>

            <div className="note-row-arrow">
              ↗
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default NotesPage