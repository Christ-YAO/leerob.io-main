'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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
          </div>

          <nav className="flex flex-row flex-wrap gap-x-1 gap-y-2 capitalize">
            {navItems.map(({ path, name }) => {
              const isActive = pathname === path || (path !== '/' && pathname?.startsWith(path));

              return (
                <Link
                  key={path}
                  href={path}
                  className={`
                    relative py-1.5 px-3 rounded-md text-sm transition-all
                    ${isActive
                      ? 'text-neutral-900 dark:text-neutral-100 font-medium bg-neutral-100 dark:bg-neutral-800'
                      : 'text-neutral-500 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                    }
                  `}
                >
                  {name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 relative">
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            Portfolio réalisé par{' '}
            <Link
              href={"https://cyao.vercel.app/"}
              className={cn(
                "group font-[600] dark:font-medium relative transition-all duration-500 text-white"
              )}
            >
              C
              <span
                className={cn(
                  "absolute opacity-0 group-hover:relative group-hover:opacity-100 transition-all duration-300 ease-in-out"
                )}
              >
                hrist
              </span>{" "}
              <span
                className={cn(
                  "absolute left-[7px] group-hover:left-[40px] transition-all duration-300 ease-in-out",
                )}
              >
                yao
              </span>
              {/* <span
                className={cn(
                  "absolute opacity-0 group-hover:relative group-hover:opacity-100 transition-all duration-300 ease-in-out ml-[6px] dark:ml-[13px]"
                )}
              >
                ao
              </span> */}
              <span
                className={cn(
                  "absolute left-[25px] dark:left-[27px] group-hover:left-[30px]  dark:group-hover:left-[60px] transition-all dura delay-150 ease-in-out",
                )}
              >
                .
              </span>
            </Link>
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">

            {' · Built with '}
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
