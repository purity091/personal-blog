import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedArticles from '../components/FeaturedArticles';
import WorkTimeline from '../components/WorkTimeline';
import AITermsExplorer from '../components/AITermsExplorer';
import MyBookSlider from '../components/MyBookSlider';
import SocialBentoGrid from '../components/SocialBentoGrid';
import FooterReflect from '../components/FooterReflect';
import { getPublishedBlogPosts, getProjects } from '../lib/content';

export default function HomePage() {
  const featuredPosts = getPublishedBlogPosts().slice(0, 9);
  const projects = getProjects();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedArticles
          articles={featuredPosts.map((post) => ({
            slug: post.slug,
            data: {
              title: post.title,
              description: post.description,
              date: post.date.toISOString(),
              category: post.category,
              tags: post.tags,
              readingTime: post.readingTime,
              featured: post.featured,
              image: post.image,
            },
          }))}
        />
        {projects.length > 0 && <WorkTimeline projects={projects.slice(0, 3)} showAllLink />}
        <AITermsExplorer />
        <MyBookSlider />
        <SocialBentoGrid />
      </main>
      <FooterReflect />
      <div className="hidden">Build Time: {new Date().toLocaleString('ar-EG', { timeZone: 'Asia/Riyadh' })}</div>
    </>
  );
}
