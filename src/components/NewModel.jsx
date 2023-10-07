"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import StaticModel from "./StaticModel";

const ModelViewer = ({ modelPath, scale = 1, position = [0, 0, 0] }) => {
  return (
    <div className="h-[200px] w-1/2">
      <Canvas>
        <ambientLight intensity={1.6} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <StaticModel modelPath={modelPath} scale={scale} position={position} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;