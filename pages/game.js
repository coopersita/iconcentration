import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import ReactCardFlip from "react-card-flip";
import Card from "../components/card";
import GiEmptyChessboard from "react-icons/gi";
import styles from "../styles/Game.module.css";

export default function Game() {
  const { query } = useRouter();

  // const [flipCout, setFlipCout] = useState(0);

  let tileNumber = 0;
  let tileTransition = 0;
  let tiles = [];
  let gridSize = "grid6";

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
  };

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

  const [cardsFlipped, setCardsFlipped] = useState(
    Array(tileNumber).fill(false)
  );

  let counter = tileNumber / 2;

  let iconSet = [...Array(counter).keys()];
  while (counter > 0) {
    const index = Math.floor(Math.random() * iconSet.length);
    tiles.push(iconSet.splice(index, 1));
    counter--;
  }

  const handleFlip = (e) => {
    const index = e.target.dataset.index;
    console.log(cardsFlipped[index]);
    if (cardsFlipped[index] === false) {
      // const flipCount = props.cardsFlipped();
      let tempCards = cardsFlipped;
      tempCards[index] = true;
      setCardsFlipped(tempCards);
      console.log(cardsFlipped[index]);

      setTimeout(() => {
        tempCards[index] = false;
        setCardsFlipped(tempCards);
      }, tileTransition * 1000);
    }

    //   if (props.cardsFlipped == 2) {
    //     setTimeout(() => {
    //       setFlipped(false);
    //     }, props.speed * 1000);
    //   }
    // } else {
    //   setFlipped(false);
    // }
  };
  //duplicat the array and shuffle
  const tileOrder = tiles.concat(tiles).sort((a, b) => 0.5 - Math.random());
  let cards = tileOrder.map((e, i) => (
    <ReactCardFlip
      isFlipped={cardsFlipped[i]}
      flipDirection="horizontal"
      key={"card" + i + "-" + e}
    >
      <Card iconSet={2} index={50} callback={handleFlip} face={e} />
      <Card
        iconSet={parseInt(query.icons)}
        index={e}
        callback={handleFlip}
        face={e}
      />
    </ReactCardFlip>
  ));

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
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

          <div className={gridSize + " grid"}>{cards}</div>

          <Link href="/" passHref>
            <button className="start">Back</button>
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
    </motion.div>
  );
}
