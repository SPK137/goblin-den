import { useThree } from "@react-three/fiber";
import React, { FC, Suspense, useEffect } from "react";

const CanvasWrapper: FC = ({ children }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, -15);
  }, [camera.position]);

  return <Suspense fallback={null}>{children}</Suspense>;
};

export default CanvasWrapper;
