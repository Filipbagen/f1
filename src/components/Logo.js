import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";
import path from '../glb/logga3d.glb'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useLoader } from "@react-three/fiber";

export default function Model(props) {
  const ref = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, path);

  useFrame(({ clock }) => {
     const t = Math.sin(clock.getElapsedTime())
     // 0.3 - (1 + Math.sin(t / 4)) / 8
     ref.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 8, 0)
     ref.current.position.y = (1 + Math.sin(5 * t)) / 10
  })

  return (
    <group ref={ref} {...props} dispose={null}
      scale={0.4}
    >
      <mesh
        // onClick={(e) => console.log("click")}
        castShadow={false}
        receiveShadow={false}
        geometry={nodes.Text.geometry}
        material={materials["Material.001"]}
        position={[0, 0, 0]}
        rotation={[1.8, 0, -0.1]}
      />
    </group>
  );
}

useGLTF.preload(path);




