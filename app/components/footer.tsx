'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { path: '/', name: 'accueil' },
    { path: '/work', name: 'expérience' },
    { path: '/blog', name: 'blog' },
  ];

  return (
    <footer className="mt-20 mb-8 border-t border-neutral-200 dark:border-neutral-800 pt-8">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-col space-y-2">
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              © {currentYear} France Stanislas. Tous droits réservés.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/france-stanislas-bantantoula-koudissa-30245b254"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:ton-email@gmail.com"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                aria-label="Email (Gmail)"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L2.455 4.64 12 9.548l9.545-4.91-1.472-1.853C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>
            </div>
          </div>

          <nav className="flex flex-row flex-wrap gap-x-4 gap-y-2">
            {navItems.map(({ path, name }) => {
              const isActive = pathname === path || (path !== '/' && pathname?.startsWith(path));

              return (
                <Link
                  key={path}
                  href={path}
                  className={`
                    text-sm transition-colors
                    ${isActive
                      ? 'text-neutral-900 dark:text-neutral-100 font-medium'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                    }
                  `}
                >
                  {name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            Built with{' '}
            <Link
              href="https://nextjs.org"
              className="underline hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </Link>
            {', '}
            <Link
              href="https://tailwindcss.com"
              className="underline hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </Link>
            {' and '}
            <Link
              href="https://vercel.com"
              className="underline hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
