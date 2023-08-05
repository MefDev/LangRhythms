export interface Post {
  _id: string
  title: string
  categories: string[]
  description: string
  slug: Slug
  estimatedReadingTime: number
  authorImage: Image
  authorName: string
  publishedAt: string
  mainImage: Image
  authorBio: Array<BlockContent>
  body: Array<BlockContent>
  relatedPosts: {
    mainImage: Image
    _id: string
    slug: Slug
    title: string
    description: string
  }[]
}

interface BlockContent {
  _type: 'block'
  children: Array<{
    _type: 'span'
    text: string
  }>
  markDefs: unknown[]
}

interface Slug {
  _type: 'slug'
  current: string
}

export interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}
