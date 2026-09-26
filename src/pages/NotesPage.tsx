import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { sanityClient } from '../lib/sanity'

import noteDog from '../assets/dog/c0e2eba3-aa0f-4422-964b-066b0dbe2c2e.png'

import './NotesPage.css'

type Note = {
  _id: string
  title: string
  content: string
  createdAt?: string
}

function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient
      .fetch(`
        *[_type == "note"] | order(createdAt desc) {
          _id,
          title,
          content,
          createdAt
        }
      `)
      .then((data) => {
        setNotes(data)
      })
      .catch((error) => {
        console.error('Failed to fetch notes:', error)
        setNotes([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <main className="notes-page">

      {/* HERO */}

      <section className="notes-hero">

        <div className="notes-hero-copy">
          <p>
            Small notes on coding, building, AI and things
            I want to remember along the way.
          </p>
        </div>

        <div className="notes-hero-art">
          <img
            src={noteDog}
            alt="Dog illustration"
          />
        </div>

      </section>


      {/* NOTES */}

      <section className="notes-list">

        {loading ? (
          <p className="notes-message">
            Loading notes...
          </p>
        ) : notes.length === 0 ? (
          <p className="notes-message">
            No notes yet.
          </p>
        ) : (
          notes.map((note, index) => (
            <Link
              key={note._id}
              to={`/notes/${note._id}`}
              className="note-row"
            >

              <div className="note-index">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="note-content-preview">

                <div className="note-top">

                  <h2>
                    {note.title}
                  </h2>

                  {note.createdAt && (
                    <span className="note-date">
                      {new Date(note.createdAt).toLocaleDateString()}
                    </span>
                  )}

                </div>

                <p>
                  {note.content}
                </p>

              </div>

              <span className="note-arrow">
                ↗
              </span>

            </Link>
          ))
        )}

      </section>

    </main>
  )
}

export default NotesPage