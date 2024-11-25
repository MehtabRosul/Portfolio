import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// Example data structure for ball textures
const ballTextures = [
  'texture1.png',
  'texture2.png',
  // ... more texture URLs
];

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  useEffect(() => {
    console.log('Ball props:', props);
    if (!props.imgUrl) {
      console.error('Missing image URL for Ball');
    }
  }, [props]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {ballTextures.map((texture, index) => (
          <Ball key={index} imgUrl={texture} />
        ))}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;