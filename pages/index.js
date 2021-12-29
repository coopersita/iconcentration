import Head from "next/head";
import Link from "next/link";

import { useState } from "react";
import { motion } from "framer-motion";

import { DiReact } from "react-icons/di";
import { GiAbstract030 } from "react-icons/gi";
import { GrBar } from "react-icons/gr";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [size, setSize] = useState("m");
  const [speed, setSpeed] = useState("f");
  const [icons, setIcons] = useState(1);

  const variants = {
    hidden: {
      opacity: 0,
      width: "90%",
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
  };

  const handleSize = (e) => {
    setSize(e.target.dataset.size);
  };

  const handleSpeed = (e) => {
    setSpeed(e.target.dataset.speed);
  };

  const handleIcons = (e) => {
    setIcons(e.target.dataset.icon);
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
        <motion.div initial="hidden" animate="visible" variants={variants}>
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
            <button
              data-icon={1}
              onClick={handleIcons}
              className={
                icons == 1 ? "selected " + styles.icon_btn : styles.icon_btn
              }
            >
              <DiReact />
            </button>
            <button
              data-icon={2}
              onClick={handleIcons}
              className={
                icons == 2 ? "selected " + styles.icon_btn : styles.icon_btn
              }
            >
              <GiAbstract030 />
            </button>
            <button
              data-icon={3}
              onClick={handleIcons}
              className={
                icons == 3 ? "selected " + styles.icon_btn : styles.icon_btn
              }
            >
              <GrBar />
            </button>
          </div>
        </motion.div>
        <Link
          href={{
            pathname: "/game",
            query: { size: size, speed: speed, icons: icons },
          }}
          passHref
        >
          <button className="start">Start</button>
        </Link>
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
