import type { MetadataRoute } from 'next';
import { getPublishedBlogPosts } from '../lib/content';
import { books } from '../data/books';

const siteUrl = 'https://lahlah.ai';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/projects`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/books`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${siteUrl}/terms`, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const blogRoutes = getPublishedBlogPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.updatedDate ?? post.date,
    changeFrequency: 'monthly' as const,
    priority: post.featured ? 0.8 : 0.6,
  }));

  const bookRoutes = books.map((book) => ({
    url: `${siteUrl}/books/${book.slug}`,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...bookRoutes];
}
