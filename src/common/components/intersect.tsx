import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

interface IntersectProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'data-animate' | 'data-animate-layer';
}

export default function Intersect({
  type = 'data-animate-layer',
  className,
  ...props
}: IntersectProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.setAttribute(type, '');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -20% 0px' },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [type]);

  return <div ref={ref} className={cn('opacity-0', className)} {...props} />;
}
