import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../lib/sanity'

type Post = {
  title: string
  description?: string
}

function NoteDetailPage() {
  const { slug } = useParams()

  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    client
      .fetch<Post>(
        `
        *[
          _type == "post" &&
          slug.current == $slug
        ][0] {
          title,
          description
        }
        `,
        {
          slug,
        },
      )
      .then((data) => {
        setPost(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [slug])

  if (!post) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>{post.title}</h1>

      {post.description && (
        <p>{post.description}</p>
      )}
    </div>
  )
}

export default NoteDetailPage