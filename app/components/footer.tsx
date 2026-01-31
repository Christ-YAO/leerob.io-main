'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CustomIcon } from './CustomIcon';

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
                className="text-neutral-500 hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <CustomIcon name="linkedin" size={20} />
              </a>
              <a
                href="mailto:ton-email@gmail.com"
                className="text-neutral-500 hover:text-red-600 transition-colors"
                aria-label="Email (Gmail)"
              >
                <CustomIcon name="gmail" size={20} />
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
