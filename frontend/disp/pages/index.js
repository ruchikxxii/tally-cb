import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
    <div className="page my-16 text-white">
      <section className="hero-section">
        <div className="hero__main">
          {/* <div className="hero__title mr-7">
            BPGC<span>Everyone</span>
          </div> */}
          <div className="flex flex-col overflow-hidden font-serif">
            <h1 className="text-white font-extrabold text-8xl">TypeQuest</h1>
            <h1 className="text-white font-extrabold text-7xl text-center">
              Arena
            </h1>
          </div>

          <div className="hero__cta text-base leading-7">
            Ready to test your typing speed and compete with the fastest? Join
            now and become a typing wizz!
          </div>
          <Link href="/home" id="start-exploring-button">
            <div className="start-exploring__arrow" />
            Get Started
            <div className="start-exploring__arrow" />
          </Link>
          <div className="hero__p" />
        </div>
        <div className="hero__aside">
          <div className="words-row">
            <span>Speed WPM Swift&nbsp;</span>
            <span>Speed WPM Swift&nbsp;</span>
          </div>
          <div className="words-row">
            <span>Keyboard Challenge Typing Fast&nbsp;</span>
            <span>Keyboard Challenge Typing Fast&nbsp;</span>
          </div>
          <div className="words-row">
            <span>Finger Race Champion Reflex&nbsp;</span>
            <span>Finger Race Champion Reflex&nbsp;</span>
          </div>
          <div className="words-row">
            <span>Accuracy Keystrokes Wizard Rapid&nbsp;</span>
            <span>Accuracy Keystrokes Wizard Rapid&nbsp;</span>
          </div>
        </div>
      </section>
      <section className="features-section"></section>
    </div>
  );
}
