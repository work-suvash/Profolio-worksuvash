'use client';

import { useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation: string;
}

export default function AnimatedSection({ children, animation }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable animations on low-end devices or data saver mode
    const isLowPowerMode = 'connection' in navigator && 
      ((navigator as any).connection.saveData || (navigator as any).connection.effectiveType === '2g');
    
    if (isLowPowerMode || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`${isVisible ? animation : 'opacity-0'} transition-opacity duration-500 transform-gpu`}>
      {children}
    </div>
  );
}
