import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const contentRoot = path.join(process.cwd(), 'src', 'content');

export interface ContentImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: Date;
  updatedDate?: Date;
  image?: ContentImage;
  tags: string[];
  category: string;
  readingTime: number;
  featured: boolean;
  draft: boolean;
  body: string;
}

export interface ProjectRecord {
  _id: string;
  title: string;
  organization: string;
  role: string;
  employmentType?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description: string;
  details?: string;
  tasks?: string[];
  technologies?: string[];
  projectUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
}

function asDate(value: unknown, fallback = new Date()) {
  const date = value instanceof Date ? value : new Date(String(value ?? ''));
  return Number.isNaN(date.getTime()) ? fallback : date;
}

function asString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback;
}

function asStringArray(value: unknown) {
  if (!Array.isArray(value)) return [];

  return value.flatMap((item) => {
    if (typeof item === 'string') return [item];
    if (item && typeof item === 'object' && typeof (item as { task?: unknown }).task === 'string') {
      return [(item as { task: string }).task];
    }
    return [];
  });
}

function slugFromFile(fileName: string) {
  return path.basename(fileName, path.extname(fileName)).toLowerCase();
}

function readMarkdownCollection(collection: 'blog' | 'projects') {
  const directory = path.join(contentRoot, collection);
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => ({ fileName, source: fs.readFileSync(path.join(directory, fileName), 'utf8') }));
}

function parseImage(value: unknown, defaultAlt: string): ContentImage | undefined {
  if (!value || typeof value !== 'object') return undefined;
  const image = value as Record<string, unknown>;
  const src = asString(image.src);
  if (!src) return undefined;
  return {
    src,
    alt: asString(image.alt, defaultAlt),
    ...(typeof image.width === 'number' ? { width: image.width } : {}),
    ...(typeof image.height === 'number' ? { height: image.height } : {}),
  };
}

export function getBlogPosts(): BlogPost[] {
  return readMarkdownCollection('blog').map(({ fileName, source }) => {
    const parsed = matter(source);
    const data = parsed.data as Record<string, unknown>;
    const date = asDate(data.date);
    const updatedDate = data.updatedDate ? asDate(data.updatedDate) : undefined;

    return {
      slug: slugFromFile(fileName),
      title: asString(data.title, 'بدون عنوان'),
      description: asString(data.description),
      date,
      updatedDate,
      image: parseImage(data.image, 'صورة المقال'),
      tags: asStringArray(data.tags),
      category: asString(data.category, 'الذكاء الاصطناعي'),
      readingTime: typeof data.readingTime === 'number' ? data.readingTime : 5,
      featured: Boolean(data.featured),
      draft: Boolean(data.draft),
      body: parsed.content.trim(),
    };
  });
}

export function getPublishedBlogPosts() {
  return getBlogPosts()
    .filter((post) => !post.draft)
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return b.date.getTime() - a.date.getTime();
    });
}

export function getProjects(): ProjectRecord[] {
  return readMarkdownCollection('projects')
    .map(({ fileName, source }) => {
      const parsed = matter(source);
      const data = parsed.data as Record<string, unknown>;
      const image = parseImage(data.image, asString(data.title));
      const startDate = asDate(data.startDate);
      const endDate = data.endDate ? asDate(data.endDate) : undefined;

      return {
        _id: slugFromFile(fileName),
        title: asString(data.title),
        organization: asString(data.organization),
        role: asString(data.role),
        employmentType: asString(data.employmentType) || undefined,
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate?.toISOString().split('T')[0],
        isCurrent: Boolean(data.isCurrent),
        description: asString(data.description),
        details: asString(data.details) || undefined,
        tasks: asStringArray(data.tasks),
        technologies: asStringArray(data.technologies),
        projectUrl: asString(data.projectUrl) || undefined,
        imageUrl: image?.src,
        imageAlt: image?.alt,
        order: typeof data.order === 'number' ? data.order : 0,
        featured: data.featured !== false,
        draft: Boolean(data.draft),
      };
    })
    .filter((project) => project.featured && !project.draft)
    .sort((a, b) => {
      const orderDifference = (a as ProjectRecord & { order: number }).order - (b as ProjectRecord & { order: number }).order;
      if (orderDifference !== 0) return orderDifference;
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    })
    .map(({ order: _order, featured: _featured, draft: _draft, ...project }) => project);
}
