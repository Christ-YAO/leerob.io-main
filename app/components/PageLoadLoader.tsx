'use client';

export function PageLoadLoader() {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111010]"
      aria-hidden
      aria-live="polite"
    >
      <svg
        className="page-load-loader"
        x="0"
        y="0"
        viewBox="0 0 50 31.25"
        height={31.25}
        width={50}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          className="loader-track"
          strokeWidth={4}
          fill="none"
          pathLength={100}
          d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
        />
        <path
          className="loader-car"
          strokeWidth={4}
          fill="none"
          pathLength={100}
          d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
        />
      </svg>
    </div>
  );
}
