import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Breadcrumbs from '../../components/Breadcrumbs';
import FooterReflect from '../../components/FooterReflect';

export const metadata: Metadata = { title: 'شروط الاستخدام' };

export default function TermsPage() {
  return <><Navbar /><main className="min-h-screen bg-[var(--bg-primary)] pt-16 text-right" dir="rtl"><Breadcrumbs items={[{ label: 'شروط الاستخدام' }]} /><article className="prose prose-lg mx-auto max-w-3xl px-6 py-16"><h1>شروط الاستخدام</h1><p>باستخدامك هذا الموقع، توافق على استخدام محتواه لأغراض شخصية وتعليمية ومهنية مشروعة، مع احترام حقوق الملكية الفكرية.</p><h2>المحتوى</h2><p>المقالات والكتب المنشورة هنا تهدف إلى مشاركة المعرفة ولا تمثل استشارة مهنية أو ضمانًا لنتيجة محددة.</p><h2>التعديلات</h2><p>قد نحدّث المحتوى أو هذه الشروط عند الحاجة، وسيظهر الإصدار الأحدث على هذه الصفحة.</p></article></main><FooterReflect /></>;
}
