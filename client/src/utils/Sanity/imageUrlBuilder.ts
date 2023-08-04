import sanityClient from '@/services/client'
import { Image } from '@/types/Blog.types'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

function urlForImage(source: Image) {
  return builder.image(source)
}

export default urlForImage
