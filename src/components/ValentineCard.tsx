"use client";

import { useState } from "react";
import NoButton from "./NoButton";
import Celebration from "./Celebration";

export default function ValentineCard() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return <Celebration />;
  }

  return (
    <>
      {/* Centered card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="valentine-card rounded-3xl p-10 md:p-14 max-w-sm md:max-w-md w-full text-center animate-fadeInScale">
          {/* Top heart */}
          <div className="text-6xl mb-4 animate-pulseSoft inline-block">❤️</div>

          {/* Heading */}
          <h1 className="font-pacifico text-4xl md:text-5xl text-rose-500 mb-3 leading-tight">
            Hey You,
          </h1>

          {/* Question */}
          <p className="font-dancing text-3xl md:text-4xl text-rose-400 font-bold mb-6">
            Will you be my Valentine?
          </p>

          {/* Sweet message */}
          <p className="font-dancing text-2xl md:text-2xl text-pink-500 mb-10 leading-relaxed">
            I promise lots of love, laughter
            <br />
            and probably way too many heart emojis 💕
          </p>

          {/* YES button */}
          <button
            className="btn-yes text-white font-bold text-lg px-10 py-3.5 rounded-full w-full"
            onClick={() => setAccepted(true)}
            aria-label="Yes, I will be your Valentine"
          >
            Yes! 💖
          </button>

          {/* Hint */}
          <p className="text-xs text-black-100 mt-5 font-light italic">
            (There&apos;s also another option nearby, but it seems very shy...)
          </p>
        </div>
      </div>

      {/* No button — sibling of the card, uses position: fixed */}
      <NoButton />
    </>
  );
}
