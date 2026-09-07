import type { Metadata } from 'next';
import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Breadcrumbs from '../../components/Breadcrumbs';
import WorkTimeline from '../../components/WorkTimeline';
import FooterReflect from '../../components/FooterReflect';
import { getProjects } from '../../lib/content';

export const metadata: Metadata = {
  title: 'مشاريعي وتجربتي العملية',
  description: 'استكشف مشاريعي وتجربتي العملية والمهام والتقنيات التي عملت عليها.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)] pt-16 transition-colors duration-300">
        <Breadcrumbs items={[{ label: 'مشاريعي' }]} />
        {projects.length > 0 ? (
          <WorkTimeline projects={projects} headingLevel="h1" />
        ) : (
          <section className="px-6 py-32 text-center" dir="rtl">
            <div className="mx-auto flex max-w-xl flex-col items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)]">
                <BriefcaseBusiness size={30} />
              </div>
              <h1 className="text-3xl font-black text-[var(--text-primary)] md:text-5xl">مشاريعي وتجربتي العملية</h1>
              <p className="text-base font-medium leading-7 text-[var(--text-secondary)]">ستظهر المشاريع المنشورة هنا قريبًا.</p>
              <a href="/" className="inline-flex items-center gap-2 text-sm font-black text-[var(--accent-purple)] hover:text-[var(--text-primary)]">
                العودة إلى الصفحة الرئيسية
                <ArrowRight size={16} />
              </a>
            </div>
          </section>
        )}
      </main>
      <FooterReflect />
    </>
  );
}
