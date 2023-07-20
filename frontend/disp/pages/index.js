import Image from "next/image";
import { Inter } from "next/font/google";

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
            now and become a typing champion!
          </div>
          <a href="./search.html" id="start-exploring-button">
            <div className="start-exploring__arrow" />
            Get Started
            <div className="start-exploring__arrow" />
          </a>
          <div className="hero__p" />
        </div>
        <div className="hero__aside">
          <div className="words-row">
            <span>Neighbour Dulla Phoenix&nbsp;</span>
            <span>Neighbour Dulla Phoenix&nbsp;</span>
          </div>
          <div className="words-row">
            <span>Senior Junior Homie Litesian&nbsp;</span>
            <span>Senior Junior Homie Litesian&nbsp;</span>
          </div>
          <div className="words-row">
            <span>Alumnus Peer Ghot Snake&nbsp;</span>
            <span>Alumnus Peer Ghot Snake&nbsp;</span>
          </div>
          <div className="words-row">
            <span>Crush Roomie Topper Rival&nbsp;</span>
            <span>Crush Roomie Topper Rival&nbsp;</span>
          </div>
        </div>
      </section>
      <section className="features-section">
        {/* PWA, Open Source, Updated with SWD */}
      </section>
    </div>
  );
}
