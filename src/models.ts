export type Post = {
  id: string
  fields: {
    slug: string
  }
  body: string
  excerpt: string
  wordCount: {
    words: number
  }
  timeToRead: number
  frontmatter: {
    title: string
    date: string
    author: string
    banner: string
    tags: string[]
  }
}

export type Author = {
  id: string
  bio: string
  name: string
  linkedin: string
  github: string
}
