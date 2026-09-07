import type { Metadata } from 'next';
import '../styles/global.css';
import MobileNav from '../components/MobileNav';
import WhatsAppFloat from '../components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';

const siteUrl = 'https://lahlah.ai';
const defaultDescription = 'محمد لحلح | خبير الذكاء الاصطناعي - تعلم AI والشبكات العصبية';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'محمد لحلح | خبير الذكاء الاصطناعي - تعلم AI والشبكات العصبية',
    template: '%s | محمد لحلح',
  },
  description: defaultDescription,
  authors: [{ name: 'محمد لحلح' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ar_AR',
    siteName: 'محمد لحلح | AI Expert',
    title: 'محمد لحلح | خبير الذكاء الاصطناعي',
    description: defaultDescription,
    images: [{ url: '/mohamed-lahlah.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MohLahlah',
    creator: '@MohLahlah',
    title: 'محمد لحلح | خبير الذكاء الاصطناعي',
    description: defaultDescription,
    images: ['/mohamed-lahlah.jpeg'],
  },
  icons: { icon: '/logo1.png' },
};

const themeInitScript = `
  (function () {
    var theme = 'light';
    try {
      var saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') theme = saved;
    } catch (e) {}
    var root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme !== 'dark');
  })();
`;

const smoothScrollScript = `
  document.addEventListener('click', function (event) {
    var target = event.target.closest && event.target.closest('a');
    if (!target) return;
    var url = new URL(target.href, window.location.origin);
    if (url.origin !== window.location.origin) return;
    if (window.location.pathname === '/' && url.pathname === '/' && url.hash) {
      var element = document.querySelector(url.hash);
      if (element) {
        event.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', url.hash);
      }
    }
  });
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className="light" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: smoothScrollScript }} />
      </head>
      <body>
        {children}
        <MobileNav />
        <WhatsAppFloat />
        <ScrollToTop />
      </body>
    </html>
  );
}
