import { BriefcaseBusiness, CalendarDays, CheckCircle2, ExternalLink } from 'lucide-react';

export interface WorkProject {
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

function formatMonth(value?: string) {
  if (!value) return '';

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat('ar-EG', {
    month: 'short',
    year: 'numeric',
  }).format(date);
}

function formatDateRange(project: WorkProject) {
  const start = formatMonth(project.startDate);
  const end = project.isCurrent ? 'حتى الآن' : formatMonth(project.endDate) || 'مستمر';
  return `${start} — ${end}`;
}

const WorkTimeline = ({
  projects = [],
  showAllLink = false,
  headingLevel = 'h2',
}: {
  projects?: WorkProject[];
  showAllLink?: boolean;
  headingLevel?: 'h1' | 'h2';
}) => {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="relative overflow-hidden bg-[var(--bg-secondary)] px-6 py-20 md:py-28 transition-colors duration-500" dir="rtl">
      <div className="pointer-events-none absolute -top-40 start-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--accent-purple)]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-12 flex max-w-3xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-1.5 w-10 rounded-full bg-[var(--accent-purple)]" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[var(--accent-purple)]">المسار العملي</span>
          </div>
          {headingLevel === 'h1' ? (
            <h1 className="mb-4 text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
              مشاريعي وتجربتي العملية
            </h1>
          ) : (
            <h2 className="mb-4 text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
              مشاريعي وتجربتي العملية
            </h2>
          )}
          <p className="text-base font-medium leading-relaxed text-[var(--text-secondary)] md:text-lg">
            محطات جمعت بين بناء المنتجات، حل المشكلات، ومشاركة المعرفة التقنية.
          </p>
          </div>
          {showAllLink && (
            <a
              href="/projects"
              className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-black text-[var(--accent-purple)] transition-colors hover:text-[var(--text-primary)]"
            >
              عرض كافة المشاريع
              <ExternalLink size={15} />
            </a>
          )}
        </div>

        <div className="relative before:absolute before:inset-y-0 before:start-5 before:w-px before:bg-gradient-to-b before:from-[var(--accent-purple)]/60 before:via-[var(--border-medium)] before:to-transparent md:before:start-7">
          {projects.map((project) => (
            <article key={project._id} className="relative pb-8 ps-14 last:pb-0 md:ps-20">
              <div className="absolute start-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[var(--bg-secondary)] bg-[var(--accent-purple)] text-white shadow-lg shadow-purple-500/20 md:h-14 md:w-14">
                <BriefcaseBusiness size={20} strokeWidth={2.25} />
              </div>

              <div className="group overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--card-bg)] shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-purple)]/40 hover:shadow-[var(--shadow-lg)]">
                {project.imageUrl && (
                  <div className="h-40 overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-tertiary)] md:h-52">
                    <img
                      src={project.imageUrl}
                      alt={project.imageAlt || project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-bold text-[var(--text-muted)]">
                        <span className="text-[var(--accent-purple)]">{project.organization}</span>
                        {project.employmentType && (
                          <>
                            <span className="h-1 w-1 rounded-full bg-[var(--border-medium)]" />
                            <span>{project.employmentType}</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-2xl font-black leading-tight text-[var(--text-primary)] md:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm font-bold text-[var(--text-secondary)] md:text-base">{project.role}</p>
                    </div>

                    <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-3 py-2 text-xs font-bold text-[var(--text-muted)]">
                      <CalendarDays size={14} />
                      <span>{formatDateRange(project)}</span>
                    </div>
                  </div>

                  <p className="mb-4 text-sm font-medium leading-7 text-[var(--text-secondary)] md:text-base">
                    {project.description}
                  </p>

                  {project.details && (
                    <p className="mb-6 whitespace-pre-line text-sm leading-7 text-[var(--text-muted)]">
                      {project.details}
                    </p>
                  )}

                  {project.tasks && project.tasks.length > 0 && (
                    <div className="mb-6">
                      <h4 className="mb-3 text-xs font-black uppercase tracking-widest text-[var(--text-primary)]">المهام والإنجازات</h4>
                      <ul className="grid gap-3 md:grid-cols-2">
                        {project.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-2 text-sm leading-6 text-[var(--text-secondary)]">
                            <CheckCircle2 size={17} className="mt-1 shrink-0 text-[var(--accent-purple)]" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-5 sm:flex-row sm:items-center sm:justify-between">
                    {project.technologies && project.technologies.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span key={technology} className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-2.5 py-1 text-[11px] font-bold text-[var(--text-muted)]">
                            {technology}
                          </span>
                        ))}
                      </div>
                    ) : <span />}

                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 text-sm font-black text-[var(--accent-purple)] transition-colors hover:text-[var(--text-primary)]"
                      >
                        عرض المشروع
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;
