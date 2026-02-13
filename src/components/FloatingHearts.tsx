"use client";

import React, { useMemo } from "react";

interface HeartParticle {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  opacity: number;
}

function generateHearts(count: number): HeartParticle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 94 + 1}%`,
    size: `${(Math.random() * 1.6 + 0.7).toFixed(2)}rem`,
    duration: `${(Math.random() * 8 + 7).toFixed(1)}s`,
    delay: `-${(Math.random() * 12).toFixed(1)}s`,
    opacity: parseFloat((Math.random() * 0.55 + 0.25).toFixed(2)),
  }));
}

const SYMBOLS = ["❤️", "🩷", "💕", "💗", "💓", "💖"];

const FloatingHearts = React.memo(function FloatingHearts() {
  const hearts = useMemo(() => generateHearts(22), []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-particle"
          style={
            {
              left: h.left,
              fontSize: h.size,
              opacity: h.opacity,
              "--duration": h.duration,
              "--delay": h.delay,
            } as React.CSSProperties
          }
        >
          {SYMBOLS[h.id % SYMBOLS.length]}
        </span>
      ))}
    </div>
  );
});

export default FloatingHearts;
