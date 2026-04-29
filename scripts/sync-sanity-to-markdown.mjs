import { createClient } from '@sanity/client';
import matter from 'gray-matter';
import { writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const projectId = process.env.SANITY_PROJECT_ID || 'uih0wtzn';
const dataset = process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN;

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const BLOG_DIR = join(__dirname, '..', 'src', 'content', 'blog');

function normalizeSlug(value) {
  return String(value || '')
    .trim()
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Ensure blog directory exists
if (!existsSync(BLOG_DIR)) {
  mkdirSync(BLOG_DIR, { recursive: true });
}

async function sync() {
  console.log('🔄 Fetching posts from Sanity...');

  const posts = await client.fetch(`
    *[_type == "blogPost"] | order(publishDate desc) {
      _id,
      title,
      slug,
      description,
      publishDate,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      category,
      tags,
      readingTime,
      featured,
      draft,
      content
    }
  `);

  console.log(`📝 Found ${posts.length} posts in Sanity`);

  // Get existing markdown files to detect deleted posts
  const existingFiles = existsSync(BLOG_DIR)
    ? readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))
    : [];
  const existingSlugs = new Set(existingFiles.map(f => f.replace('.md', '')));
  const syncedSlugs = new Set();

  for (const post of posts) {
    if (!post.slug?.current) {
      console.warn(`⚠️  Skipping post without slug: ${post.title}`);
      continue;
    }

    const slug = normalizeSlug(post.slug.current);
    if (!slug) {
      console.warn(`⚠️  Skipping post with invalid slug: ${post.title}`);
      continue;
    }

    if (slug !== post.slug.current) {
      console.warn(`⚠️  Normalized slug "${post.slug.current}" -> "${slug}"`);
    }

    // Skip drafts — don't create markdown files for them
    if (post.draft === true) {
      console.log(`📝 Skipping draft: ${slug}`);
      continue;
    }

    syncedSlugs.add(slug);

    const frontmatter = {
      title: post.title,
      description: post.description,
      date: new Date(post.publishDate).toISOString().split('T')[0],
      category: post.category,
      tags: post.tags || [],
      readingTime: post.readingTime || 5,
      featured: post.featured || false,
      draft: false,
    };

    if (post.imageUrl) {
      frontmatter.image = {
        src: post.imageUrl,
        alt: post.imageAlt || post.title || 'Post image',
      };
    }

    // Content is markdown string from sanity-plugin-markdown
    const content = typeof post.content === 'string' ? post.content : '';

    const fileContent = matter.stringify(content, frontmatter);
    const filePath = join(BLOG_DIR, `${slug}.md`);

    writeFileSync(filePath, fileContent, 'utf8');
    console.log(`✅ Created/Updated: ${slug}.md`);
  }

  // Remove markdown files for posts deleted from Sanity
  for (const fileSlug of existingSlugs) {
    if (!syncedSlugs.has(fileSlug)) {
      const filePath = join(BLOG_DIR, `${fileSlug}.md`);
      unlinkSync(filePath);
      console.log(`🗑️  Deleted (removed from Sanity): ${fileSlug}.md`);
    }
  }

  console.log('✅ Sync complete!');
}

sync().catch(err => {
  console.error('❌ Sync failed:', err);
  process.exit(1);
});
