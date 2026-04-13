'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-red-500 drop-shadow-[0_0_12px_hsl(var(--primary))] animate-pulse">
        WS
      </div>
    </div>
  );
}
