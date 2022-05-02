import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Car747.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
       position={[0.3, -2, 0.09]}
       rotation={[Math.PI /2, 0, Math.PI/4]}
        scale={2.1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Cube001_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Cube001_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Cube001_3.geometry}
          material={materials["Material.004"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Car747.glb");