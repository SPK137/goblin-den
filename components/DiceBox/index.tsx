import React, { FC, useRef } from "react";
import { MeshProps } from "@react-three/fiber";
import { DoubleSide, Mesh } from "three";

import { Triplet, useBox, usePlane } from "@react-three/cannon";

export interface DiceBoxProps {
  position: Triplet;
  color: string;
}

const DiceBox: FC<DiceBoxProps & MeshProps> = ({
  position,
  color,
  ...props
}) => {
  const [plane] = usePlane(() => ({
    type: "Static",
    position: [0, -4.5, 0],
    rotation: [-Math.PI / 2, 0, 0],
    args: [20, 20],
  }));

  const [wall1] = useBox(() => ({
    type: "Static",
    position: [0, -2, 10],
    rotation: [0, 0, 0],
    args: [20, 5, 0.1],
  }));

  const [wall2] = useBox(() => ({
    type: "Static",
    position: [0, -2, -10],
    rotation: [0, 0, 0],
    args: [20, 5, 0.1],
  }));

  const [wall3] = useBox(() => ({
    type: "Static",
    position: [10, -2, 0],
    rotation: [0, -Math.PI / 2, 0],
    args: [20, 5, 0.5],
  }));

  const [wall4] = useBox(() => ({
    type: "Static",
    position: [-10, -2, 0],
    rotation: [0, -Math.PI / 2, 0],
    args: [20, 5, 0.5],
  }));

  return (
    <>
      <mesh ref={plane}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={color} side={DoubleSide} />
      </mesh>
      <mesh ref={wall1}>
        <boxGeometry args={[20, 5, 0.1]} />
        <meshStandardMaterial color={color} side={DoubleSide} />
      </mesh>
      <mesh ref={wall2}>
        <boxGeometry args={[20, 5, 0.1]} />
        <meshStandardMaterial color={color} side={DoubleSide} />
      </mesh>
      <mesh ref={wall3}>
        <boxGeometry args={[20, 5, 0.1]} />
        <meshStandardMaterial color={color} side={DoubleSide} />
      </mesh>
      <mesh ref={wall4}>
        <boxGeometry args={[20, 5, 0.1]} />
        <meshStandardMaterial color={color} side={DoubleSide} />
      </mesh>
    </>
  );
};

export default DiceBox;
