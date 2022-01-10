import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import ReactCardFlip from "react-card-flip";
import Card from "../components/card";
import styles from "../styles/Game.module.css";

export default function Game() {
  const { query } = useRouter();
  const [flipCout, setFlipCout] = useState([]);
  const [tileOrder, setTileOrder] = useState([]);
  const [cardsFlipped, setCardsFlipped] = useState([]);
  const [cardsMatched, setCardsMatched] = useState([]);
  const [isFinished, setFinished] = useState(false);
  const [tries, setTries] = useState(0);

  let tileNumber = 0;
  let tileTransition = 0;
  let tiles = [];
  let gridSize = "grid6";

  switch (query.size) {
    case "s":
      tileNumber = 16;
      gridSize = styles.grid4;
      break;
    case "m":
      tileNumber = 36;
      gridSize = styles.grid6;
      break;
    case "l":
      tileNumber = 100;
      gridSize = styles.grid10;
      break;
    default:
      tileNumber = 36;
      gridSize = styles.grid6;
      break;
  }

  switch (query.speed) {
    case "s":
      tileTransition = 3;
      break;
    case "f":
      tileTransition = 2;
      break;
    case "r":
      tileTransition = 1;
      break;
    default:
      tileTransition = 1;
      break;
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  useEffect(() => {
    let counter = tileNumber / 2;

    let iconSet = [...Array(50).keys()];
    while (counter > 0) {
      const index = Math.floor(Math.random() * iconSet.length);
      tiles.push(iconSet.splice(index, 1));
      counter--;
    }

    setTileOrder(shuffle(tiles.concat(tiles)));

    setCardsFlipped(Array(tileNumber).fill(false));
    setCardsMatched(Array(tileNumber).fill(false));
  }, []);

  const handleFlip = (index) => {
    if (!flipCout.includes(index) && flipCout.length <= 2) {
      let count = flipCout;
      flipCout.push(index);
      setFlipCout(count);
      setCardsFlipped((prev) =>
        prev.map((el, i) => {
          if (i === index) {
            return true;
          }
          return el;
        })
      );
    }
  };

  useEffect(() => {
    if (flipCout.length === 2) {
      setTries(tries + 1);
      let isMatch = false;
      if (tileOrder[flipCout[0]] === tileOrder[flipCout[1]]) {
        isMatch = true;
      }
      if (!isMatch) {
        setTimeout(() => {
          setCardsFlipped((prev) =>
            prev.map((el, i) => {
              if (flipCout.includes(i)) {
                return false;
              }
              return el;
            })
          );
        }, tileTransition * 1000);
      } else {
        isMatch = false;
        setCardsMatched((prev) =>
          prev.map((el, i) => {
            if (flipCout.includes(i)) {
              return true;
            }
            return el;
          })
        );
      }
      setFlipCout([]);
    }
  }, [
    cardsFlipped,
    tileTransition,
    flipCout,
    tileOrder,
    cardsMatched,
    tileNumber,
    tries,
  ]);

  useEffect(() => {
    if (cardsMatched.filter(Boolean).length == tileNumber) {
      setFinished(true);
    }
  }, [cardsMatched, tileNumber]);

  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.02,
      },
    }),
    hidden: { opacity: 0 },
  };

  let cards = tileOrder.map((e, i) => (
    <motion.div
      className={`${cardsMatched[i] ? styles.matched : ""} ${
        isFinished ? styles.finished : ""
      }`}
      key={"card" + i + "-" + e}
      variants={variants}
      custom={i}
      initial="hidden"
      animate="visible"
    >
      <ReactCardFlip isFlipped={cardsFlipped[i]} flipDirection="horizontal">
        <Card
          iconSet={2}
          index={50}
          callback={() => {
            handleFlip(i);
          }}
        />
        <Card iconSet={parseInt(query.icons)} index={e} callback={null} />
      </ReactCardFlip>
    </motion.div>
  ));

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
        <h2 className={styles.tries}>Tries: {tries}</h2>
        <div className={gridSize + " grid"}>{cards}</div>

        <Link href="/" passHref>
          <button className="start">Restart</button>
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
