export type Note = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string[]
  tags: string[]
}

export const notes: Note[] = [
  {
    slug: 'hashmap-two-pointers-stack',
    title: 'HashMap, Two Pointers, Sliding Window and Stack',
    date: '2026-09-09',
    category: 'Algorithms',

    excerpt:
      'A quick summary of four common problem-solving patterns and when they are useful.',

    content: [
      'HashMap is mainly useful when I need fast lookup, counting or mapping one value to another.',
      'Two pointers are useful when two positions need to move through an array together, especially in sorted arrays.',
      'Sliding window is useful for continuous ranges such as subarrays and substrings.',
      'Stack is useful when I need to remember the most recent unresolved state.',
      'The key is not memorising each LeetCode question, but recognising which pattern the problem belongs to.',
    ],

    tags: [
      'LeetCode',
      'HashMap',
      'Two Pointers',
      'Sliding Window',
      'Stack',
    ],
  },

  {
    slug: 'authentication-flow',
    title: 'How authentication flows through a full-stack app',
    date: '2026-09-10',
    category: 'Backend',

    excerpt:
      'A note on how login, JWT and the frontend user state connect together.',

    content: [
      'The frontend sends the user email and password to the backend login endpoint.',
      'The controller receives the request and passes it into the authentication service.',
      'The service verifies the user credentials and returns a JWT token when the credentials are valid.',
      'The frontend stores the token and sends it with later requests.',
      'The backend reads the token to identify the current user and can then apply authorization rules.',
    ],

    tags: ['JWT', 'NestJS', 'Authentication', 'React'],
  },

  {
    slug: 'docker-basics',
    title: 'Docker finally makes more sense',
    date: '2026-09-12',
    category: 'DevOps',

    excerpt:
      'Image, container and Dockerfile are much easier to understand when viewed as three separate ideas.',

    content: [
      'A Docker image is the reusable blueprint for the application environment.',
      'A container is a running instance created from an image.',
      'A Dockerfile describes how an image should be built.',
      'Ports expose services from the container to the outside environment.',
      'Docker Compose is useful when multiple services need to run together.',
    ],

    tags: ['Docker', 'DevOps', 'Deployment'],
  },

  {
    slug: 'ai-agent-basics',
    title: 'Prompt, tool, skill and agent',
    date: '2026-09-12',
    category: 'AI',

    excerpt:
      'Trying to separate several AI engineering concepts that often get mixed together.',

    content: [
      'A prompt gives instructions or context to a model.',
      'A tool gives the model access to an external capability.',
      'A skill can package a reusable workflow or capability.',
      'An agent combines model reasoning with tools and repeated actions to complete a task.',
      'The important part is the system around the model, not only the model itself.',
    ],

    tags: ['LLM', 'Agent', 'Tool Calling', 'AI Engineering'],
  },
]

export const getNoteBySlug = (slug: string) => {
  return notes.find((note) => note.slug === slug)
}