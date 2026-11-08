import TechNoteModules from '../components/TechNoteModules'
import { localizeContent } from '../i18n/content'
import { Trans } from '../i18n/Language'
import { useLanguage } from '../i18n/context'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { sanityClient } from '../lib/sanity'

import noteDog from '../assets/dog/c0e2eba3-aa0f-4422-964b-066b0dbe2c2e.png'

import './NotesPage.css'


type Note = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  category?: string
  tags?: string[]
  createdAt?: string
}


function NotesPage() {
  const { language } = useLanguage()
  const [notesData, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)


  const notes = notesData.map((entry) => localizeContent(entry, language))

  useEffect(() => {
    sanityClient
      .fetch(`
        *[_type == "note"] | order(createdAt desc) {
          _id,
          translations,
          title,
          "slug": slug.current,
          excerpt,
          category,
          tags,
          createdAt
        }
      `)
      .then((data) => {
        setNotes(data)
      })
      .catch((error) => {
        console.error(
          'Failed to fetch notes:',
          error
        )

        setNotes([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])


  return (
    <main className="notes-page">

      {/* =========================
          HERO
          ========================= */}

      <section className="notes-hero">

        <div className="notes-hero-copy">

          <p><Trans text="Small notes on coding, building, AI and things I want to remember along the way." /></p>

        </div>


        <div className="notes-hero-art">

          <img
            src={noteDog}
            alt="Dog illustration"
          />

        </div>

      </section>


      {/* =========================
          NOTES LIST
          ========================= */}

      <TechNoteModules />

      <section className="notes-list">

        {loading ? (

          <p className="notes-message"><Trans text="Loading notes..." /></p>

        ) : notes.length === 0 ? (

          <p className="notes-message"><Trans text="No notes yet." /></p>

        ) : (

          notes.map((note, index) => (

            <Link
              key={note._id}
              to={`/notes/${note.slug}`}
              className="note-row"
            >

              {/* NUMBER */}

              <div className="note-index">

                {String(index + 1).padStart(2, '0')}

              </div>


              {/* CONTENT */}

              <div className="note-content-preview">

                <div className="note-top">

                  <div>

                    {note.category && (
                      <p className="note-category">
                        <Trans text={note.category} />
                      </p>
                    )}

                    <h2>
                      <Trans text={note.title} />
                    </h2>

                  </div>


                  {note.createdAt && (

                    <span className="note-date">

                      {new Date(
                        note.createdAt
                      ).toLocaleDateString(
                        language === 'zh' ? 'zh-CN' : 'en-AU',
                        {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        }
                      )}

                    </span>

                  )}

                </div>


                {note.excerpt && (

                  <p className="note-excerpt">
                    <Trans text={note.excerpt} />
                  </p>

                )}


                {note.tags &&
                  note.tags.length > 0 && (

                    <div className="note-tags-preview">

                      {note.tags.map((tag) => (

                        <span key={tag}>
                          <Trans text={tag} />
                        </span>

                      ))}

                    </div>

                  )}

              </div>


              {/* ARROW */}

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