import { createClient } from '@sanity/client'
import sanitizeHtml from 'sanitize-html'
import { marked } from 'marked'

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
// Note: `!defined(draft) || draft == false` handles both explicit false AND missing field
export const postsQuery = `
  *[_type == "blogPost" && !(_id in path("drafts.**")) && (!defined(draft) || draft == false)] | order(publishDate desc) {
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
  *[_type == "blogPost" && !(_id in path("drafts.**")) && (!defined(draft) || draft == false)] | order(publishDate desc)[0...3] {
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

/**
 * Convert Markdown string to sanitized HTML string
 * XSS protection via sanitize-html
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  if (!markdown) return '';
  try {
    const rawHtml = typeof marked.parse === 'function'
      ? await marked.parse(markdown)
      : await (marked as any)(markdown);

    // Sanitize HTML to prevent XSS
    const cleanHtml = sanitizeHtml(rawHtml as string, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'blockquote', 'pre', 'code', 'hr', 'br',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'span', 'div', 'p', 'ul', 'ol', 'li',
        'a', 'strong', 'em', 'u', 's',
      ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        img: ['src', 'alt', 'title', 'width', 'height', 'loading', 'class'],
        a: ['href', 'title', 'target', 'rel', 'class'],
        code: ['class'],
        '*': ['class'],
      },
      allowedSchemes: ['http', 'https', 'mailto', 'tel'],
      allowedSchemesByTag: {},
      allowedSchemesAppliedToAttributes: ['href', 'src'],
      allowProtocolRelative: false,
    });

    return cleanHtml;
  } catch (err) {
    console.error('Error parsing markdown:', err);
    return markdown;
  }
}
