import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import {
  PortableText,
  type PortableTextComponents,
} from '@portabletext/react'

import { sanityClient } from '../lib/sanity'

import './NoteDetailPage.css'


type TableRow = {
  _key?: string
  cells?: string[]
}

type TableBlock = {
  _type: 'table'
  _key?: string
  headers?: string[]
  rows?: TableRow[]
}

type Note = {
  _id: string
  title: string
  category?: string
  createdAt?: string
  tags?: string[]
  excerpt?: string
  content?: unknown[]
}


/* =========================================================
   PORTABLE TEXT COMPONENTS
   ========================================================= */

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="note-content-h1">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="note-content-h2">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="note-content-h3">
        {children}
      </h3>
    ),

    normal: ({ children }) => (
      <p className="note-content-paragraph">
        {children}
      </p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="note-blockquote">
        {children}
      </blockquote>
    ),
  },


  list: {
    bullet: ({ children }) => (
      <ul className="note-list note-list-bullet">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="note-list note-list-number">
        {children}
      </ol>
    ),
  },


  listItem: {
    bullet: ({ children }) => (
      <li>
        {children}
      </li>
    ),

    number: ({ children }) => (
      <li>
        {children}
      </li>
    ),
  },


  marks: {
    strong: ({ children }) => (
      <strong>
        {children}
      </strong>
    ),

    em: ({ children }) => (
      <em>
        {children}
      </em>
    ),

    code: ({ children }) => (
      <code className="note-inline-code">
        {children}
      </code>
    ),

    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noreferrer"
        className="note-content-link"
      >
        {children}
      </a>
    ),
  },


  types: {
    table: ({ value }) => {
      const table = value as TableBlock

      const headers =
        table.headers ?? []

      const rows =
        table.rows ?? []

      return (
        <div className="note-table-wrapper">
          <table className="note-table">

            {headers.length > 0 && (
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th
                      key={`${header}-${index}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
            )}

            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={row._key ?? rowIndex}
                >
                  {(row.cells ?? []).map(
                    (cell, cellIndex) => (
                      <td
                        key={`${cell}-${cellIndex}`}
                      >
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )
    },
  },
}


/* =========================================================
   PAGE
   ========================================================= */

function NoteDetailPage() {
  const { slug } = useParams()

  const [note, setNote] =
    useState<Note | null>(null)

  const [loading, setLoading] =
    useState(true)


  useEffect(() => {
    if (!slug) {
      setLoading(false)
      return
    }


    sanityClient
      .fetch(
        `
          *[
            _type == "note" &&
            _id == $slug
          ][0] {
            _id,
            title,
            category,
            createdAt,
            tags,
            excerpt,
            content
          }
        `,
        {
          slug,
        }
      )
      .then((data) => {
        setNote(data)
      })
      .catch((error) => {
        console.error(
          'Failed to fetch note:',
          error
        )

        setNote(null)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [slug])


  /* =========================================================
     LOADING
     ========================================================= */

  if (loading) {
    return (
      <main className="note-detail-page">

        <div className="note-detail-message">
          Loading note...
        </div>

      </main>
    )
  }


  /* =========================================================
     NOT FOUND
     ========================================================= */

  if (!note) {
    return (
      <main className="note-detail-page">

        <div className="note-detail-message">

          <p>
            Note not found.
          </p>

          <Link to="/notes">
            ← Back to notes
          </Link>

        </div>

      </main>
    )
  }


  return (
    <main className="note-detail-page">

      {/* BACK */}

      <Link
        to="/notes"
        className="note-back"
      >
        ← Notes
      </Link>


      <article className="note-article">

        {/* HEADER */}

        <header className="note-detail-header">

          {note.category && (
            <p className="note-detail-category">
              {note.category}
            </p>
          )}


          <h1>
            {note.title}
          </h1>


          <div className="note-detail-meta">

            {note.createdAt && (
              <span>
                {new Date(
                  note.createdAt
                ).toLocaleDateString(
                  'en-AU',
                  {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  }
                )}
              </span>
            )}


            {note.tags &&
              note.tags.length > 0 && (

                <span>
                  {note.tags.join(' · ')}
                </span>

              )}

          </div>

        </header>


        {/* INTRO */}

        {note.excerpt && (
          <section className="note-intro">

            <p>
              {note.excerpt}
            </p>

          </section>
        )}


        {/* CONTENT */}

        {note.content &&
          note.content.length > 0 && (

            <section className="note-content">

              <PortableText
                value={note.content as any}
                components={
                  portableTextComponents
                }
              />

            </section>

          )}


        {/* TAGS */}

        {note.tags &&
          note.tags.length > 0 && (

            <section className="note-tags">

              {note.tags.map((tag) => (

                <span key={tag}>
                  {tag}
                </span>

              ))}

            </section>

          )}

      </article>


      {/* FOOTER */}

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