"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import StaticModel from "./StaticModel";

const ModelViewer = ({ modelPath, scale = 1, position = [0, 0, 0] }) => {
  return (
    <div className="h-[200px] w-1/2">
      <Canvas resize>
        <ambientLight intensity={1.6} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <StaticModel modelPath={modelPath} scale={scale} position={position} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;