"use client";

import { useState } from "react";

const greetings = [
  "당신의 오늘에 좋은 일이 가득하길 바라요.",
  "만나서 반가워요. 오늘은 어떤 하루를 보내고 있나요?",
  "작은 인사 하나로, 조금 더 따뜻한 하루가 되었네요.",
  "다시 만나도 반가워요. 우리, 자주 인사해요!",
];

export default function Home() {
  const [greeting, setGreeting] = useState(0);
  const [theme, setTheme] = useState("mint");

  return (
    <div className="hello-page" data-theme={theme}>
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Hello 홈">
          hello<span>✳</span>
        </a>
        <span className="header-note">A LITTLE HELLO GOES A LONG WAY</span>
        <span className="welcome-label"><i /> 누구나 환영해요</span>
      </header>

      <main className="hero">
        <section className="intro" aria-labelledby="greeting-title">
          <p className="eyebrow"><span /> NICE TO MEET YOU</p>
          <h1 id="greeting-title">반가워요,<br /><span>안녕하세요.</span></h1>
          <p className="intro-copy">모든 좋은 시작은 작은 인사에서.<br />잠시 쉬어가도 좋아요. 여기는 당신을 위한 공간이에요.</p>
          <button className="hello-button" onClick={() => setGreeting((value) => (value + 1) % greetings.length)}>
            인사 나누기 <span aria-hidden="true">↗</span>
          </button>
          <p className="greeting-message" aria-live="polite">{greetings[greeting]}</p>
        </section>

        <div className="artwork" aria-hidden="true">
          <span className="art-label">GOOD VIBES, ALWAYS.</span>
          <span className="sparkle sparkle-one">✳</span>
          <span className="sparkle sparkle-two">✦</span>
          <div className="orbit" />
          <div className="smiley" key={greeting}>
            <div className="eyes"><span /><span /></div>
            <div className="smile" />
            <span className="cheek cheek-left" /><span className="cheek cheek-right" />
          </div>
          <span className="hello-sticker">Oh, hello!</span>
          <span className="small-sticker">오늘도 좋은 하루 :)</span>
          <span className="art-number">FIG. 01 — A FRESH START</span>
        </div>
      </main>

      <footer className="site-footer">
        <p>작은 인사, <span>새로운 시작.</span></p>
        <div className="palette" role="group" aria-label="화면 포인트 색상">
          <span>오늘의 색</span>
          {[
            { id: "mint", name: "민트" },
            { id: "peach", name: "피치" },
            { id: "lavender", name: "라벤더" },
          ].map((color) => (
            <button key={color.id} className={`color-swatch ${color.id}`} aria-label={color.name} aria-pressed={theme === color.id} onClick={() => setTheme(color.id)}>
              {theme === color.id && <span aria-hidden="true">✓</span>}
            </button>
          ))}
        </div>
        <span className="footer-note">MADE WITH A LITTLE JOY <span>✳</span></span>
      </footer>
    </div>
  );
}
