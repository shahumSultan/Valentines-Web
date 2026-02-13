"use client";

import { useState, useCallback, useRef } from "react";

// Keep the button away from the viewport center where the card lives
const CENTER_EXCLUSION = 0.28;

function getRandomPosition(): { x: number; y: number } {
  let x: number, y: number;
  do {
    x = Math.random() * 78 + 6; // 6vw – 84vw
    y = Math.random() * 72 + 10; // 10vh – 82vh
  } while (
    x > 50 - CENTER_EXCLUSION * 50 &&
    x < 50 + CENTER_EXCLUSION * 50 &&
    y > 50 - CENTER_EXCLUSION * 50 &&
    y < 50 + CENTER_EXCLUSION * 50
  );
  return { x, y };
}

export default function NoButton() {
  // Initial position: lower-right of center so it starts visible
  const [pos, setPos] = useState({ x: 60, y: 65 });
  const [shaking, setShaking] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const escape = useCallback(() => {
    setShaking(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setPos(getRandomPosition());
      setShaking(false);
    }, 160);
  }, []);

  return (
    <button
      className={[
        "btn-no",
        "fixed z-20",
        "px-6 py-2.5",
        "rounded-full",
        "text-lg font-medium",
        "select-none cursor-pointer",
        shaking ? "animate-shake" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        left: `${pos.x}vw`,
        top: `${pos.y}vh`,
        transform: "translate(-50%, -50%)",
        transition: "none",
      }}
      onMouseEnter={escape}
      onClick={escape}
      aria-label="No"
    >
      No 😅
    </button>
  );
}
