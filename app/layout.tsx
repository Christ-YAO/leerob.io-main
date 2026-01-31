import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Footer } from './components/footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './blog/[slug]/sandpack';

export const metadata: Metadata = {
  metadataBase: new URL('https://france-stanislas.dev'),
  title: {
    default: 'France BANTANTOULA • DevOps',
    template: '%s | France Bantantoula',
  },
  description:
    'DevOps Junior orienté CI/CD et automatisation. GitLab, Docker, Linux, AWS. Stagiaire DevOps chez Box Africa, Abidjan.',
  openGraph: {
    title: 'France Stanislas BANTANTOULA KOUDISSA',
    description:
      'DevOps Junior orienté CI/CD et automatisation. GitLab, Docker, Linux, AWS.',
    url: 'https://france-stanislas.dev',
    siteName: 'France Bantantoula',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'France Stanislas BANTANTOULA KOUDISSA',
    card: 'summary_large_image',
  },
  icons: {
    icon: '/images/France_.jpg',
  },
};

const cx = (...classes: (string | undefined | null | false)[]): string =>
  classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={cx(
        'dark text-white bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="antialiased max-w-3xl mb-8 flex flex-col md:flex-row px-4 mt-8 mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          <div className="min-h-[50vh] flex-auto">
            {children}
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
