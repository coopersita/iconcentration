import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [size, setSize] = useState("m");
  const [speed, setSpeed] = useState("f");
  const [icons, setIcons] = useState(0);

  const handleSize = (e) => {
    setSize(e.target.dataset.size);
  };

  const handleSpeed = (e) => {
    setSpeed(e.target.dataset.speed);
    console.log(speed);
  };

  return (
    <div className="container">
      <Head>
        <title>Iconcentration</title>
      </Head>

      <main className="main">
        <h1 className="title">Iconcentration</h1>

        <p className="description">
          Flip cards over to make pairs. Match all cards with as few tries as
          possible.
        </p>

        <h2>Choose a board size:</h2>
        <div className="grid">
          <button
            data-size="s"
            onClick={handleSize}
            className={size == "s" ? "selected" : ""}
          >
            Small
          </button>
          <button
            data-size="m"
            onClick={handleSize}
            className={size == "m" ? "selected" : ""}
          >
            Medium
          </button>
          <button
            data-size="l"
            onClick={handleSize}
            className={size == "l" ? "selected" : ""}
          >
            Impossible
          </button>
        </div>
        <h2>Choose a flipping speed:</h2>
        <div className="grid">
          <button
            data-speed="s"
            onClick={handleSpeed}
            className={speed == "s" ? "selected" : ""}
          >
            Slow
          </button>
          <button
            data-speed="f"
            onClick={handleSpeed}
            className={speed == "f" ? "selected" : ""}
          >
            Fast
          </button>
          <button
            data-speed="r"
            onClick={handleSpeed}
            className={speed == "r" ? "selected" : ""}
          >
            Rush
          </button>
        </div>
        <h2>Choose an icon set:</h2>
        <div className="grid">
          <button>Small</button>
          <button>Medium</button>
          <button>Impossible</button>
        </div>

        <button className="start">Start</button>
      </main>

      <footer className="footer">
        <a
          href="https://aliciaramirez.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Alicia Ramirez
        </a>
      </footer>
    </div>
  );
}
