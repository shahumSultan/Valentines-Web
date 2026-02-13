"use client";

import { useEffect, useState } from "react";

interface BurstHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  symbol: string;
}

const BURST_SYMBOLS = ["❤️", "💕", "💖", "💗", "🩷", "💓"];

function generateBurst(count: number): BurstHeart[] {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 360;
    const distance = Math.random() * 200 + 90;
    return {
      id: i,
      x: Math.cos((angle * Math.PI) / 180) * distance,
      y: Math.sin((angle * Math.PI) / 180) * distance,
      size: Math.random() * 1.6 + 1,
      duration: Math.random() * 0.3 + 0.6,
      delay: Math.random() * 0.3,
      symbol: BURST_SYMBOLS[i % BURST_SYMBOLS.length],
    };
  });
}

export default function Celebration() {
  const [burstHearts] = useState<BurstHeart[]>(() => generateBurst(48));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={[
        "fixed inset-0 z-50",
        "flex flex-col items-center justify-center",
        "transition-opacity duration-700",
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      style={{
        background:
          "linear-gradient(135deg, #fff0f3 0%, #ffd6e0 40%, #ffaec2 100%)",
      }}
    >
      {/* Burst particles */}
      <div className="relative flex items-center justify-center" style={{ width: "500px", height: "400px" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {burstHearts.map((h) => (
            <span
              key={h.id}
              className="absolute pointer-events-none"
              style={{
                fontSize: `${h.size}rem`,
                transform: visible
                  ? `translate(${h.x}px, ${h.y}px) scale(1)`
                  : "translate(0,0) scale(0)",
                opacity: visible ? 1 : 0,
                transition: `transform ${h.duration}s ease-out ${h.delay}s, opacity ${h.duration}s ease-out ${h.delay}s`,
              }}
            >
              {h.symbol}
            </span>
          ))}
        </div>

        {/* Central big heart */}
        <span
          className="text-8xl z-10 animate-heartBurst"
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          ❤️
        </span>
      </div>

      {/* Message */}
      <div
        className={[
          "mt-12 text-center px-8",
          "transition-all duration-700 delay-300",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        ].join(" ")}
      >
        <h1 className="font-pacifico text-5xl md:text-7xl text-rose-500 mb-4 leading-tight">
          Yay! I knew it! 🎉
        </h1>
        <p className="font-dancing text-2xl md:text-3xl text-rose-400 font-semibold mb-3">
          You&apos;ve made me the happiest person alive.
        </p>
        <p className="font-dancing text-xl md:text-2xl text-pink-500 mt-4">
          Happy Valentine&apos;s Day, my love 💕
        </p>
      </div>

      {/* Ambient floating hearts in background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      >
        {Array.from({ length: 28 }, (_, i) => (
          <span
            key={i}
            className="heart-particle text-2xl"
            style={
              {
                left: `${(i / 28) * 100}%`,
                "--duration": `${5 + i * 0.5}s`,
                "--delay": `-${i * 0.8}s`,
              } as React.CSSProperties
            }
          >
            {BURST_SYMBOLS[i % BURST_SYMBOLS.length]}
          </span>
        ))}
      </div>
    </div>
  );
}
