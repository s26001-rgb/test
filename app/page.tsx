"use client";

import { useState, type CSSProperties } from "react";

export default function Home() {
  const [paused, setPaused] = useState(false);

  return (
    <main className="stage" data-paused={paused}>
      <h1 className="hello" aria-label="hello">
        {Array.from("hello").map((letter, index) => (
          <span
            className="letter"
            key={index}
            aria-hidden="true"
            style={{ "--index": index } as CSSProperties}
          >
            <span className="letter-face">{letter}</span>
          </span>
        ))}
      </h1>

      <button
        className="motion-toggle"
        type="button"
        aria-label={paused ? "애니메이션 재생" : "애니메이션 일시 정지"}
        aria-pressed={paused}
        title={paused ? "재생" : "일시 정지"}
        onClick={() => setPaused((value) => !value)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {paused ? (
            <path d="M8 5.5a.75.75 0 0 1 1.14-.64l10 6.5a.75.75 0 0 1 0 1.28l-10 6.5A.75.75 0 0 1 8 18.5z" />
          ) : (
            <path d="M7 5h3v14H7zm7 0h3v14h-3z" />
          )}
        </svg>
      </button>
    </main>
  );
}
