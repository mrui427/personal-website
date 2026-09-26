import { sanityClient } from './sanity'

export const getProjects = async () => {
  return sanityClient.fetch(`
    *[_type == "project"] | order(year desc) {
      _id,
      title,
      "slug": slug.current,
      subtitle,
      year,
      category,
      role,
      shortDescription,
      stack,
      overview,
      problem,
      solution,
      highlights,
      responsibilities,
      learnings,
      accent,
      github,
      demo
    }
  `)
}

export const getProjectBySlug = async (slug: string) => {
  return sanityClient.fetch(
    `
      *[_type == "project" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        subtitle,
        year,
        category,
        role,
        shortDescription,
        stack,
        overview,
        problem,
        solution,
        highlights,
        responsibilities,
        learnings,
        accent,
        github,
        demo
      }
    `,
    { slug }
  )
}