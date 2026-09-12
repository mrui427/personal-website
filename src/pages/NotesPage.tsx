import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { client } from '../lib/sanity'

type Post = {
  _id: string
  title: string
  description?: string
  slug?: {
    current: string
  }
}

function NotesPage() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    client
      .fetch<Post[]>(`
        *[_type == "post"] {
          _id,
          title,
          description,
          slug
        }
      `)
      .then((data) => {
        setPosts(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1>Notes</h1>

      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>

          {post.description && (
            <p>{post.description}</p>
          )}

          {post.slug?.current && (
            <Link to={`/notes/${post.slug.current}`}>
              Read more
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

export default NotesPage