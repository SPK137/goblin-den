import React, { FC, useMemo, useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import { DoubleSide, Mesh, PlaneGeometry, Texture } from "three";
import { createD4Textures, generateD10 } from "../../utils/dice/geometry";
import {
  d4_labels,
  diceColor,
  materialOptions,
  physicalMaterialOptions,
  scale,
} from "../../utils/constants/diceConstants";
import { MapControls, Plane, useTexture } from "@react-three/drei";

export interface DiceProps {
  type: "d4" | "d6" | "d8" | "d10" | "d100" | "d12" | "d20";
}

const Dice: FC<DiceProps & MeshProps> = ({ type, ...props }) => {
  const ref = useRef<Mesh>();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (ref?.current) ref.current.rotation.x += 0.01;
  });

  const [d10Vertices, d10Faces] = useMemo(generateD10, []);
  return (
    <>
      <mesh
        {...props}
        ref={ref}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        {type === "d4" && <tetrahedronGeometry args={[0.8]} />}
        {type === "d6" && <boxGeometry args={[1, 1, 1]} />}
        {type === "d8" && <octahedronGeometry args={[0.8]} />}
        {type === "d10" && (
          <polyhedronGeometry args={[d10Vertices, d10Faces, 0.7]} />
        )}
        {type === "d100" && (
          <polyhedronGeometry args={[d10Vertices, d10Faces, 0.7]} />
        )}
        {type === "d12" && <dodecahedronGeometry args={[0.8]} />}
        {type === "d20" && <icosahedronGeometry args={[0.7]} />}

        <meshPhysicalMaterial
          {...physicalMaterialOptions}
          color={hovered ? "hotpink" : "#252525"}
          side={DoubleSide}
        />
      </mesh>
    </>
  );
};

export default Dice;
