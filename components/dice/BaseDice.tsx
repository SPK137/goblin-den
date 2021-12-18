import React, { FC, useMemo, useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import {
  BoxGeometry,
  BufferGeometry,
  DodecahedronGeometry,
  DoubleSide,
  IcosahedronGeometry,
  Mesh,
  OctahedronGeometry,
  PolyhedronGeometry,
  TetrahedronGeometry,
} from "three";
import { generateD10 } from "../../utils/dice/geometry";
import { physicalMaterialOptions } from "../../utils/constants/diceConstants";

import {
  BodyProps,
  ConvexPolyhedronProps,
  Triplet,
  useBox,
  useConvexPolyhedron,
} from "@react-three/cannon";
import { Geometry } from "../../utils/Geometry/Geometry";

function toConvexProps(
  bufferGeometry: BufferGeometry
): ConvexPolyhedronProps["args"] {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  // Merge duplicate vertices resulting from glTF export.
  // Cannon assumes contiguous, closed meshes to work
  geo.mergeVertices();
  return [
    geo.vertices.map((v) => [v.x, v.y, v.z]),
    geo.faces.map((f) => [f.a, f.b, f.c]),
    [],
  ];
}

export type DiceType = "d4" | "d6" | "d8" | "d10" | "d100" | "d12" | "d20";

export interface DiceProps {
  type: DiceType;
  position: Triplet;
  rotation: Triplet;
}

const Dice: FC<DiceProps & MeshProps> = ({
  type,
  position,
  rotation,
  ...props
}) => {
  // const ref = useRef<Mesh>();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const clickClack = useMemo(() => new Audio("/dice.mp3"), []);

  const [d10Vertices, d10Faces] = useMemo(generateD10, []);

  const geometry = useMemo(() => {
    if (type === "d4") return new TetrahedronGeometry(0.8);
    else if (type === "d6") return new BoxGeometry(1, 1, 1);
    else if (type === "d8") return new OctahedronGeometry(0.8);
    else if (type === "d10")
      return new PolyhedronGeometry(d10Vertices, d10Faces, 0.7);
    else if (type === "d100")
      return new PolyhedronGeometry(d10Vertices, d10Faces, 0.7);
    else if (type === "d12") return new DodecahedronGeometry(0.7);
    else if (type === "d20") return new IcosahedronGeometry(0.7);
    else return new IcosahedronGeometry(0.7);
  }, [d10Faces, d10Vertices, type]);

  const args = useMemo(() => toConvexProps(geometry), [geometry]);

  const [ref] = useConvexPolyhedron(() => ({
    args,
    mass: 100,
    position,
    rotation,
  }));

  return (
    <>
      <mesh
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        castShadow
        receiveShadow
        {...{ geometry, position, ref, rotation }}
      >
        {type === "d4" && <tetrahedronBufferGeometry args={[0.8]} />}
        {type === "d6" && <boxBufferGeometry args={[1, 1, 1]} />}
        {type === "d8" && <octahedronBufferGeometry args={[0.8]} />}
        {type === "d10" && (
          <polyhedronBufferGeometry args={[d10Vertices, d10Faces, 0.7]} />
        )}
        {type === "d100" && (
          <polyhedronBufferGeometry args={[d10Vertices, d10Faces, 0.7]} />
        )}
        {type === "d12" && <dodecahedronBufferGeometry args={[0.7]} />}
        {type === "d20" && <icosahedronBufferGeometry args={[0.7]} />}
        <meshPhysicalMaterial
          {...physicalMaterialOptions}
          color={hovered ? "#ff99ff" : "#3a3a3a"}
          side={DoubleSide}
        />
      </mesh>
    </>
  );
};

export default Dice;
