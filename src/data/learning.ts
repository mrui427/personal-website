export type LearningItem = {
  slug: string
  title: string
  subtitle: string
  category: string
  status: 'Learning' | 'Ongoing' | 'Completed'
  progress: string
  summary: string
  topics: string[]
  notes: string[]
  accent: string
}

export const learningItems: LearningItem[] = [
  {
    slug: 'algorithms',
    title: 'Algorithms',
    subtitle: 'LeetCode, patterns and problem solving',
    category: 'Computer Science',
    status: 'Ongoing',
    progress: 'Foundations → Patterns',
    summary:
      'Building algorithmic thinking through common problem-solving patterns rather than memorising individual questions.',

    topics: [
      'HashMap',
      'Two Pointers',
      'Sliding Window',
      'Stack',
      'Prefix Sum',
      'Binary Search',
      'Trees',
      'Dynamic Programming',
    ],

    notes: [
      'HashMap is useful when fast lookup matters.',
      'Two pointers often work well on ordered data or when shrinking a search space.',
      'Sliding window is useful for continuous subarrays or substrings.',
      'Stack is useful when the latest unresolved state needs to be remembered.',
    ],

    accent: '#e5e5e5',
  },

  {
    slug: 'full-stack',
    title: 'Full-stack Development',
    subtitle: 'React, NestJS and application architecture',
    category: 'Software Engineering',
    status: 'Ongoing',
    progress: 'Building real products',
    summary:
      'Learning full-stack development by building complete application flows from UI to API to database.',

    topics: [
      'React',
      'TypeScript',
      'NestJS',
      'REST API',
      'Authentication',
      'PostgreSQL',
      'Prisma',
      'Testing',
    ],

    notes: [
      'Frontend handles presentation and interaction.',
      'Controllers receive requests and services contain business logic.',
      'ORMs make relational database operations easier to manage in application code.',
      'Authentication identifies the user while authorization controls what they can access.',
    ],

    accent: '#e8e2db',
  },

  {
    slug: 'docker',
    title: 'Docker & Deployment',
    subtitle: 'Containers, environments and shipping software',
    category: 'DevOps',
    status: 'Learning',
    progress: 'Starting from fundamentals',
    summary:
      'Understanding how applications move from local development into consistent, deployable environments.',

    topics: [
      'Image',
      'Container',
      'Dockerfile',
      'Ports',
      'Volumes',
      'Environment Variables',
      'Docker Compose',
      'CI/CD',
    ],

    notes: [
      'An image is the reusable blueprint.',
      'A container is a running instance of an image.',
      'Docker helps reduce environment differences between machines.',
      'Docker Compose can coordinate multiple services locally.',
    ],

    accent: '#dfe7ea',
  },

  {
    slug: 'ai-engineering',
    title: 'AI Engineering',
    subtitle: 'LLMs, tools, agents and real applications',
    category: 'Artificial Intelligence',
    status: 'Learning',
    progress: 'Application layer',
    summary:
      'Exploring how AI capabilities can be integrated into real software products rather than used as isolated demos.',

    topics: [
      'LLMs',
      'Prompt Engineering',
      'Structured Output',
      'Tool Calling',
      'Agents',
      'RAG',
      'Evaluation',
      'AI Product Design',
    ],

    notes: [
      'Prompting is only one part of an AI system.',
      'Structured output makes LLM responses easier for applications to consume.',
      'Tools allow models to interact with external systems.',
      'Agents combine reasoning, tools and repeated execution.',
    ],

    accent: '#e6e1ee',
  },

  {
    slug: 'english',
    title: 'English',
    subtitle: 'Technical communication and everyday fluency',
    category: 'Communication',
    status: 'Ongoing',
    progress: 'Daily practice',
    summary:
      'Improving spoken English for technical interviews, workplace communication and everyday conversations.',

    topics: [
      'Technical Interviews',
      'Project Explanation',
      'Daily Conversation',
      'Listening',
      'IELTS',
      'Vocabulary',
    ],

    notes: [
      'Clear structure matters more than using complicated vocabulary.',
      'Technical explanations become easier when answers follow a simple sequence.',
      'Repeated speaking practice reduces hesitation over time.',
    ],

    accent: '#eee8df',
  },
]

export const getLearningItemBySlug = (slug: string) => {
  return learningItems.find((item) => item.slug === slug)
}