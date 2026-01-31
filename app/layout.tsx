import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Footer } from './components/footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './blog/[slug]/sandpack';

export const metadata: Metadata = {
  metadataBase: new URL('https://france-stanislas.dev'),
  title: {
    default: 'France Stanislas Bantan Toula Koudissa',
    template: '%s | France Stanislas',
  },
  description:
    'DevOps Junior orienté CI/CD et automatisation. GitLab, Docker, Linux, AWS. Stagiaire DevOps chez Box Africa, Abidjan.',
  openGraph: {
    title: 'France Stanislas Bantan Toula Koudissa',
    description:
      'DevOps Junior orienté CI/CD et automatisation. GitLab, Docker, Linux, AWS.',
    url: 'https://france-stanislas.dev',
    siteName: 'France Stanislas',
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
    title: 'France Stanislas Bantan Toula Koudissa',
    card: 'summary_large_image',
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
      <body className="antialiased max-w-2xl mb-8 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          <div className="min-h-[50vh] flex-auto">
            {children}
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
