import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-6xl font-semibold tabular-nums tracking-tighter text-neutral-600 dark:text-neutral-500 sm:text-7xl">
        404
      </p>
      <h1 className="mt-4 font-medium text-2xl tracking-tighter text-white sm:text-3xl">
        Page introuvable
      </h1>
      <p className="mt-3 max-w-sm text-neutral-400">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-800/80 px-4 py-2.5 text-sm font-medium text-neutral-200 no-underline transition-colors hover:border-neutral-600 hover:bg-neutral-800 hover:text-white"
        >
          Retour à l&apos;accueil
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            />
          </svg>
        </Link>
        <Link
          href="/work"
          className="text-sm text-neutral-500 underline underline-offset-2 transition-colors hover:text-neutral-300"
        >
          Expérience
        </Link>
        <Link
          href="/blog"
          className="text-sm text-neutral-500 underline underline-offset-2 transition-colors hover:text-neutral-300"
        >
          Blog
        </Link>
      </div>
    </section>
  );
}
