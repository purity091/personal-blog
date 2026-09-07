import Navbar from '../components/Navbar';
import FooterReflect from '../components/FooterReflect';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)] px-6 pt-16 text-center" dir="rtl">
        <div><p className="mb-4 text-7xl font-black text-[var(--accent-purple)]">404</p><h1 className="mb-4 text-3xl font-black text-[var(--text-primary)]">الصفحة غير موجودة</h1><p className="mb-8 text-[var(--text-secondary)]">يبدو أن الرابط الذي فتحته غير صحيح أو أن الصفحة نُقلت.</p><a href="/" className="btn-primary">العودة إلى الرئيسية</a></div>
      </main>
      <FooterReflect />
    </>
  );
}
