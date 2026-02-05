'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Trail {
  x: number;
  y: number;
  id: number;
  rotation: number;
  scale: number;
}

export default function MouseTrail({ 
  imageSrc = '/star.png', 
  maxTrails = 10,
  size = 20 
}) {
  const [trails, setTrails] = useState<Trail[]>([]);
  const trailIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail: Trail = {
        x: e.clientX,
        y: e.clientY,
        id: trailIdRef.current++,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.5,
      };

      setTrails((prev) => {
        const updated = [...prev, newTrail];
        return updated.slice(-maxTrails);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [maxTrails]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute animate-fade-out"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: `translate(-50%, -50%) rotate(${trail.rotation}deg) scale(${trail.scale})`,
            opacity: (index + 1) / trails.length,
          }}
        >
          <Image
            src={imageSrc}
            alt="trail"
            width={size}
            height={size}
          />
        </div>
      ))}
    </div>
  );
}