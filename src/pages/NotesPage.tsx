import { useEffect, useState } from 'react'
import { sanityClient } from '../lib/sanity'

type Note = {
  _id: string
  title: string
  content: string
  createdAt?: string
}

function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([])

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
      .catch(console.error)
  }, [])

  return (
    <div>
      <h1>Notes</h1>

      {notes.map((note) => (
        <div key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  )
}

export default NotesPage