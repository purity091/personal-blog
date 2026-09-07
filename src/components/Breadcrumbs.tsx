interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="مسار التنقل" dir="rtl" className="border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="mx-auto flex max-w-6xl items-center px-6 py-4 text-sm font-bold text-[var(--text-muted)]">
        <ol className="flex flex-wrap items-center gap-2" role="list">
          <li>
            <a href="/" className="transition-colors hover:text-[var(--accent-purple)]">الرئيسية</a>
          </li>
          {items.map((item) => (
            <li key={`${item.href ?? 'current'}-${item.label}`} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-[var(--border-medium)]">/</span>
              {item.href ? (
                <a href={item.href} className="transition-colors hover:text-[var(--accent-purple)]">{item.label}</a>
              ) : (
                <span aria-current="page" className="text-[var(--text-secondary)]">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
