import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Dice from "../components/dice/BaseDice";

import { Box } from "../components/DiceBox";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{"Goblin's Den"}</title>
        <meta name="description" content="3D Dice Roller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Dice type="d4" position={[-6, 0, 0]} />
        <Dice type="d6" position={[-4, 0, 0]} />
        <Dice type="d8" position={[-2, 0, 0]} />
        <Dice type="d10" position={[0, 0, 0]} />
        <Dice type="d12" position={[2, 0, 0]} />
        <Dice type="d100" position={[4, 0, 0]} />
        <Dice type="d20" position={[6, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default Home;
