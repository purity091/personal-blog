import { createClient } from '@sanity/client'

// Hardcoded public values — safe to commit (visible in browser dev tools anyway)
const PROJECT_ID = 'uih0wtzn'
const DATASET = 'production'

export const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
})

// GROQ queries
export const postsQuery = `
  *[_type == "blogPost" && !(_id in path("drafts.**")) && draft == false] | order(publishDate desc) {
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
  *[_type == "blogPost" && !(_id in path("drafts.**")) && draft == false] | order(publishDate desc)[0...3] {
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
  try {
    const html = typeof marked.parse === 'function'
      ? await marked.parse(markdown)
      : await (marked as any)(markdown);
    return html;
  } catch (err) {
    console.error('Error parsing markdown:', err);
    return markdown;
  }
}
