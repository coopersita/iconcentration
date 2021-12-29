import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import Card from "../components/card";
import styles from "../styles/Game.module.css";

export default function Game() {
  const { query } = useRouter();
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
      tileTransition = 2;
      break;
    case "f":
      tileTransition = 1;
      break;
    case "r":
      tileTransition = 0.6;
      break;
    default:
      tileTransition = 1;
      break;
  }

  let counter = tileNumber / 2;

  let iconSet = [...Array(counter).keys()];
  while (counter > 0) {
    const index = Math.floor(Math.random() * iconSet.length);
    tiles.push(iconSet.splice(index, 1));
    counter--;
  }
  //duplicat the array and shuffle
  const tileOrder = tiles.concat(tiles).sort((a, b) => 0.5 - Math.random());
  let cards = tileOrder.map((e, i) => (
    <Card key={"card" + i + e} iconSet={parseInt(query.icons)} index={e} />
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

          <Link href="/">
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
