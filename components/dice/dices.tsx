import React, { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide, Mesh } from "three";

export const D4 = ({ ...props }) => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref?.current) ref.current.rotation.x += 0.01;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <tetrahedronGeometry args={[0.8]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export const D6 = ({ ...props }) => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref?.current) ref.current.rotation.x += 0.01;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[0.8, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export const D8 = ({ ...props }) => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref?.current?.rotation) ref.current.rotation.x += 0.01;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <octahedronGeometry args={[0.8]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export const D10 = ({ ...props }) => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(({ clock }) => {
    if (ref?.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  // Return the view, these are regular Threejs elements expressed in JSX

  const [vertices, faces] = useMemo(() => {
    var a = (Math.PI * 2) / 10,
      k = Math.cos(a),
      h = 0.105,
      v = -1;
    var vertices = [];
    for (var i = 0, b = 0; i < 10; ++i, b += a)
      vertices.push([Math.cos(b), Math.sin(b), h * (i % 2 ? 1 : -1)]);
    vertices.push([0, 0, -1]);
    vertices.push([0, 0, 1]);
    var faces = [
      [0, 1, 10],
      [1, 2, 10],
      [1, 2, 11],
      [2, 3, 11],
      [2, 3, 10],
      [3, 4, 10],
      [3, 4, 11],
      [4, 5, 11],
      [4, 5, 10],
      [5, 6, 10],
      [5, 6, 11],
      [6, 7, 11],
      [6, 7, 10],
      [7, 8, 10],
      [7, 8, 11],
      [8, 9, 11],
      [8, 9, 10],
      [9, 0, 10],
      [9, 0, 11],
      [0, 1, 11],
    ];

    console.log(vertices);

    // faces = faces.map((item) => convertToTriangle(item));

    return [vertices.flat(), faces.flat()];
  }, []);

  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <polyhedronGeometry args={[vertices, faces, 0.7]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "orange"}
        side={DoubleSide}
      />
    </mesh>
  );
};

export const D12 = ({ ...props }) => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref?.current) ref.current.rotation.x += 0.01;
  });

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <dodecahedronGeometry args={[0.8]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export const D20 = ({ ...props }) => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref?.current) ref.current.rotation.x += 0.01;
  });

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <icosahedronGeometry args={[0.7]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};
