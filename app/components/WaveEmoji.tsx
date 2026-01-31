'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function WaveEmoji({ className }: { className?: string }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const run = () => {
      setAnimate(true);
      const t = setTimeout(() => setAnimate(false), 600);
      return () => clearTimeout(t);
    };
    run();
    const id = setInterval(run, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={cn(
        'inline-block origin-[70%_70%]',
        animate && 'animate-[wave-emoji_0.6s_ease-in-out]',
        className
      )}
      aria-hidden
    >
      👋
    </span>
  );
}
