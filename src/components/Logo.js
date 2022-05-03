import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import path from '../glb/logga3d.glb'

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(path);
  return (
    <group ref={group} {...props} dispose={null}
    
    
    scale={1}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.001"]}

        position={[0, 2.5, -0.03]}
        rotation={[1.9, 0, 0 ]}

      />
    </group>
  );
}

useGLTF.preload(path);