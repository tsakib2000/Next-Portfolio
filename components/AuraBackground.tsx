'use client';

import type { ReactNode } from 'react';

export function AuraBackground({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background:
            'linear-gradient(rgba(14,165,233,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.12) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          mixBlendMode: 'normal',
          filter: 'blur(113px)',
          pointerEvents: 'none',
          transform: 'translateZ(0)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background:
            'linear-gradient(rgba(14,165,233,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.06) 1px, transparent 1px)',
          backgroundSize: '10px 10px',
          mixBlendMode: 'normal',
          pointerEvents: 'none',
          transform: 'translateZ(0)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background:
            'radial-gradient(circle at 55% 49%, rgba(6,182,212,0.35) 0%, transparent 45%)',
          mixBlendMode: 'screen',
          filter: 'blur(200px)',
          pointerEvents: 'none',
          transform: 'translateZ(0)',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
