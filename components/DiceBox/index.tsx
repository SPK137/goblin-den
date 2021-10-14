import React, { FC, useRef } from "react";
import { MeshProps } from "@react-three/fiber";
import { DoubleSide, Mesh } from "three";

import { Triplet, useBox } from "@react-three/cannon";

export interface DiceBoxProps {
  position: Triplet;
  color: string;
}

const DiceBox: FC<DiceBoxProps & MeshProps> = ({
  position,
  color,
  ...props
}) => {
  const ref = useRef<Mesh>();

  const [plane] = useBox(() => ({
    mass: 0,
    velocity: [0, 0, 0],
    position: [0, -4, 0],
    rotation: [-Math.PI / 2, 0, 0],
    args: [20, 20, 0.1],
  }));

  const [plane2] = useBox(() => ({
    mass: 0,
    position: [0, -2, 10],
    rotation: [0, 0, 0],
    args: [20, 5, 0.1],
  }));

  const [plane3] = useBox(() => ({
    mass: 0,
    position: [0, -2, -10],
    rotation: [0, 0, 0],
    args: [20, 5, 0.1],
  }));

  const [plane4] = useBox(() => ({
    mass: 0,
    position: [10, -2, 0],
    rotation: [0, -Math.PI / 2, 0],
    args: [20, 5, 0.1],
  }));

  const [plane5] = useBox(() => ({
    mass: 0,
    position: [-10, -2, 0],
    rotation: [0, -Math.PI / 2, 0],
    args: [20, 5, 0.1],
  }));

  return (
    <>
      <mesh ref={plane} scale={1}>
        <boxGeometry args={[20, 20, 0.1]} />
        <meshStandardMaterial color={color} side={DoubleSide} />
      </mesh>
      <mesh ref={plane2} scale={1}>
        <boxGeometry args={[20, 5, 0.1]} />
        <meshStandardMaterial color={color} side={DoubleSide} />
      </mesh>
      <mesh ref={plane3} scale={1}>
        <boxGeometry args={[20, 5, 0.1]} />
        <meshStandardMaterial color={color} side={DoubleSide} />
      </mesh>
      <mesh ref={plane4} scale={1}>
        <boxGeometry args={[20, 5, 0.1]} />
        <meshStandardMaterial color={color} side={DoubleSide} />
      </mesh>
      <mesh ref={plane5} scale={1}>
        <boxGeometry args={[20, 5, 0.1]} />
        <meshStandardMaterial color={color} side={DoubleSide} />
      </mesh>
    </>
  );
};

export default DiceBox;
