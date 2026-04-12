import { createClient } from '@sanity/client'

// Support both Astro (import.meta.env) and Node.js/Vercel (process.env)
const getEnv = (key: string): string | undefined => {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return import.meta.env[key] as string | undefined
  }
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key]
  }
  return undefined
}

const projectId = getEnv('PUBLIC_SANITY_PROJECT_ID') || getEnv('SANITY_STUDIO_PROJECT_ID') || 'uih0wtzn'
const dataset = getEnv('PUBLIC_SANITY_DATASET') || getEnv('SANITY_STUDIO_DATASET') || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
})

// GROQ queries
export const postsQuery = `
  *[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishDate desc) {
    _id,
    title,
    slug,
    description,
    publishDate,
    "imageUrl": image.asset->url,
    category,
    tags,
    readingTime,
    featured
  }
`

export const postBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    publishDate,
    "imageUrl": image.asset->url,
    category,
    tags,
    readingTime,
    featured,
    content
  }
`

export const featuredPostsQuery = `
  *[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishDate desc)[0...3] {
    _id,
    title,
    slug,
    description,
    publishDate,
    "imageUrl": image.asset->url,
    category,
    tags,
    readingTime,
    featured
  }
`

import { marked } from 'marked';

/**
 * Convert Markdown string to HTML string
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  if (!markdown) return '';
  return marked.parse(markdown);
}

/**
 * Convert Sanity Portable Text (blocks array) to HTML string
 */
export function portableTextToHtml(blocks: any[]): string {
  if (!Array.isArray(blocks)) return ''
  return blocks
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) return ''
      const text = block.children
        .map((child: any) => {
          let t = child.text || ''
          if (child.bold) t = `<strong>${t}</strong>`
          if (child.italic) t = `<em>${t}</em>`
          return t
        })
        .join('')
      const tag = block.style === 'h1' ? 'h1' : block.style === 'h2' ? 'h2' : block.style === 'h3' ? 'h3' : 'p'
      return `<${tag}>${text}</${tag}>`
    })
    .join('\n')
}
