import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Breadcrumbs from '../../components/Breadcrumbs';
import FooterReflect from '../../components/FooterReflect';

export const metadata: Metadata = { title: 'سياسة الخصوصية' };

export default function PrivacyPage() {
  return <><Navbar /><main className="min-h-screen bg-[var(--bg-primary)] pt-16 text-right" dir="rtl"><Breadcrumbs items={[{ label: 'سياسة الخصوصية' }]} /><article className="prose prose-lg mx-auto max-w-3xl px-6 py-16"><h1>سياسة الخصوصية</h1><p>نحترم خصوصيتك. لا يجمع هذا الموقع بيانات شخصية إلا بالقدر اللازم لتقديم التجربة وتحسينها، ولا نبيع بيانات الزوار أو نشاركها لأغراض تسويقية.</p><h2>الروابط الخارجية</h2><p>قد يحتوي الموقع على روابط لخدمات خارجية، وتخضع تلك الخدمات لسياسات الخصوصية الخاصة بها.</p><h2>التواصل</h2><p>عند التواصل معنا، نستخدم المعلومات التي تقدمها فقط للرد على طلبك ومتابعة المحادثة.</p></article></main><FooterReflect /></>;
}
