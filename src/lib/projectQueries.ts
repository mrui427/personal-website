import { sanityClient } from './sanity'
import { projects, type Project } from '../data/projects'
import type { ProjectCoverImage } from './image'

type ProjectDocument = Project & {
  _id: string
  coverImage?: ProjectCoverImage
}

const localProjects: ProjectDocument[] = projects.map((project) => ({
  ...project,
  _id: project.slug,
}))

const mergeProjects = (sanityProjects: ProjectDocument[]) => {
  const sanityProjectsBySlug = new Map(
    sanityProjects.map((project) => [project.slug, project]),
  )

  const localAndSanityProjects = localProjects.map((localProject) => {
    const sanityProject = sanityProjectsBySlug.get(localProject.slug)

    if (!sanityProject) return localProject

    sanityProjectsBySlug.delete(localProject.slug)
    return {
      ...sanityProject,
      ...localProject,
      _id: sanityProject._id,
      coverImage: sanityProject.coverImage,
    }
  })

  return [...localAndSanityProjects, ...sanityProjectsBySlug.values()]
}

export const getProjects = async () => {
  try {
    const sanityProjects = await sanityClient.fetch<ProjectDocument[]>(`
      *[_type == "project"] | order(year desc) {
        _id,
        translations,
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
        demo,
        coverImage
      }
    `)

    return mergeProjects(sanityProjects)
  } catch (error) {
    console.error('Failed to fetch projects from Sanity; showing local projects:', error)
    return localProjects
  }
}

export const getProjectBySlug = async (slug: string) => {
  const localProject = localProjects.find((project) => project.slug === slug)
  if (localProject) return localProject

  return sanityClient.fetch(
    `
      *[_type == "project" && slug.current == $slug][0] {
        _id,
        translations,
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
        demo,
        coverImage
      }
    `,
    { slug }
  )
}
