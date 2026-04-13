import { createClient } from '@sanity/client'

// Hardcoded values — these are PUBLIC identifiers (not secrets)
// They are visible in browser dev tools anyway
// For local override, use .env.local

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'uih0wtzn',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Set to false for fresh data on SSR
})

// Diagnostic: Log projectId on server startup (only in SSR mode)
if (import.meta.env.SSR) {
  console.log('Sanity Client Initialized with Project ID:', import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'uih0wtzn (fallback)');
}

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
 * Convert Markdown string to HTML string (legacy support)
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

/**
 * Convert Sanity Portable Text (blocks array) to HTML string
 * Handles: blocks (headings, paragraphs, lists, blockquotes), images, code blocks
 */
export function portableTextToHtml(blocks: any[], imageUrlMap?: Record<string, string>): string {
  if (!Array.isArray(blocks) || blocks.length === 0) return ''

  return blocks
    .map((block: any) => {
      try {
        // Handle code blocks
        if (block._type === 'code') {
          const lang = block.language || 'text'
          const filename = block.filename ? `<div class="code-filename">${block.filename}</div>` : ''
          const escapedCode = (block.code || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
          return `${filename}<pre><code class="language-${lang}">${escapedCode}</code></pre>`
        }

        // Handle images
        if (block._type === 'image') {
          const assetUrl = block.asset?.url || ''
          const url = imageUrlMap?.[block.asset?._ref] || assetUrl
          const alt = block.alt || block.caption || ''
          const caption = block.caption ? `<figcaption class="text-center text-sm text-gray-500 mt-2">${block.caption}</figcaption>` : ''
          return `<figure class="my-6">${url ? `<img src="${url}" alt="${alt}" class="rounded-lg mx-auto max-w-full" loading="lazy" />` : ''}${caption}</figure>`
        }

        // Handle text blocks
        if (block._type !== 'block' || !block.children) return ''

        // Handle lists
        if (block.listItem) {
          const tag = block.listItem === 'number' ? 'li' : 'li'
          const text = block.children
            .map((child: any) => formatSpan(child))
            .join('')
          return `<${tag}>${text}</${tag}>`
        }

        // Handle blockquotes
        if (block.style === 'blockquote') {
          const text = block.children
            .map((child: any) => formatSpan(child))
            .join('')
          return `<blockquote class="border-r-4 border-[var(--accent-purple)] pr-4 my-4 text-[var(--text-secondary)] italic">${text}</blockquote>`
        }

        // Handle headings and paragraphs
        const text = block.children
          .map((child: any) => formatSpan(child))
          .join('')

        const styleMap: Record<string, string> = {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          normal: 'p',
        }
        const tag = styleMap[block.style] || 'p'
        return `<${tag}>${text}</${tag}>`
      } catch (err) {
        console.warn('Failed to render block:', err)
        return ''
      }
    })
    .join('\n')
}

/**
 * Format a single inline span (child of a block)
 */
function formatSpan(child: any): string {
  if (!child) return ''
  let text = child.text || ''

  // Escape HTML to prevent XSS
  text = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // Apply marks (bold, italic, code, underline, strike-through)
  if (child.marks && child.marks.length > 0) {
    // Wrap in reverse order so inner marks are applied first
    const marks = [...child.marks].reverse()
    for (const mark of marks) {
      switch (mark) {
        case 'strong':
        case 'b':
          text = `<strong>${text}</strong>`
          break
        case 'em':
        case 'i':
          text = `<em>${text}</em>`
          break
        case 'code':
          text = `<code class="bg-[var(--bg-tertiary)] px-1.5 py-0.5 rounded text-sm font-mono">${text}</code>`
          break
        case 'underline':
          text = `<u>${text}</u>`
          break
        case 'strike-through':
          text = `<s>${text}</s>`
          break
      }
    }
  } else {
    // Check legacy boolean flags
    if (child.bold) text = `<strong>${text}</strong>`
    if (child.italic) text = `<em>${text}</em>`
    if (child.code) text = `<code class="bg-[var(--bg-tertiary)] px-1.5 py-0.5 rounded text-sm font-mono">${text}</code>`
  }

  return text
}
