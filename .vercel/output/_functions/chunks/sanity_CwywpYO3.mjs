import { createClient } from '@sanity/client';
import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';

const PROJECT_ID = "uih0wtzn";
const DATASET = "production";
const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2024-01-01",
  useCdn: true
});
const postsQuery = `
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
`;
const postBySlugQuery = `
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
`;
const featuredPostsQuery = `
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
`;
async function markdownToHtml(markdown) {
  if (!markdown) return "";
  try {
    const rawHtml = typeof marked.parse === "function" ? await marked.parse(markdown) : await marked(markdown);
    const cleanHtml = sanitizeHtml(rawHtml, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        "img",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "pre",
        "code",
        "hr",
        "br",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
        "span",
        "div",
        "p",
        "ul",
        "ol",
        "li",
        "a",
        "strong",
        "em",
        "u",
        "s"
      ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        img: ["src", "alt", "title", "width", "height", "loading", "class"],
        a: ["href", "title", "target", "rel", "class"],
        code: ["class"],
        "*": ["class"]
      },
      allowedSchemes: ["http", "https", "mailto", "tel"],
      allowedSchemesByTag: {},
      allowedSchemesAppliedToAttributes: ["href", "src"],
      allowProtocolRelative: false
    });
    return cleanHtml;
  } catch (err) {
    console.error("Error parsing markdown:", err);
    return markdown;
  }
}

export { postBySlugQuery as a, client as c, featuredPostsQuery as f, markdownToHtml as m, postsQuery as p };
