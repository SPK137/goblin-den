import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { D12, D20, D4, D6, D8 } from "../components/dice/dices";
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
        <D4 position={[-6, 0, 0]} />
        <D6 position={[-4, 0, 0]} />
        <D8 position={[-2, 0, 0]} />
        <D12 position={[2, 0, 0]} />
        <D20 position={[4, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default Home;
