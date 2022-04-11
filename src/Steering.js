import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";



export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/steering.glb");

  useFrame(({ clock }) => {
    const a = Math.sin(clock.getElapsedTime())
    group.current.rotation.y = a
  })


  return (
    <group ref={group} {...props} dispose={null}>
      <group
      
     
        position={[0, 1.78, 0.0]} 
        rotation={[-Date.now() * 0.1, -2 , -2]}
        scale={1.62}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.098"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={materials["Material.100"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_2.geometry}
          material={materials["Material.102"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_3.geometry}
          material={materials["Material.103"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_4.geometry}
          material={materials["Material.105"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_5.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_6.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_7.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_8.geometry}
          material={materials["Material.012"]}
        />
        <lineSegments
          geometry={nodes.Plane006_9.geometry}
          material={materials["Material.098"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/steering.glb");