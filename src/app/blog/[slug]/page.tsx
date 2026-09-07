import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostLayout from '../../../components/BlogPostLayout';
import { getBlogPosts, getPublishedBlogPosts } from '../../../lib/content';

export function generateStaticParams() {
  return getPublishedBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPosts().find((item) => item.slug === slug && !item.draft);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: 'article', images: post.image ? [post.image.src] : undefined },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPosts().find((item) => item.slug === slug && !item.draft);
  if (!post) notFound();
  return <BlogPostLayout post={post} />;
}
