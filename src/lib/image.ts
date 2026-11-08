import { createImageUrlBuilder } from '@sanity/image-url'
import { sanityClient } from './sanity'

export type ProjectCoverImage = {
  asset?: { _ref: string }
  crop?: { top: number; bottom: number; left: number; right: number }
  hotspot?: { x: number; y: number; width: number; height: number }
}

const builder = createImageUrlBuilder(sanityClient)
export const urlFor = (image: ProjectCoverImage) => builder.image(image)
