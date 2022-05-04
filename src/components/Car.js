import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import path from '../glb/F1Nosub.glb'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'



export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, path);
  return (
    <group ref={group} {...props} dispose={null}
    position={[-1, -5.8, -3]}
       rotation={[-0.07, 0.7, 0]}
        scale={0.9}
      >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0.13, 1.23, 1.81]}
        scale={[0.09, 0.14, 0.48]}
      />
      <group
        position={[1.32, 0.86, -2.78]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.72, 1.72, 1.72]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials["Material.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials["Material.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials["Material.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_3.geometry}
          material={materials["Material.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_4.geometry}
          material={materials["Material.043"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mutter-Bak"].geometry}
        material={materials["Material.044"]}
        position={[1.49, 0.86, -2.81]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.72}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mclaren_märke_däck_upp.geometry}
        material={nodes.Mclaren_märke_däck_upp.material}
        position={[1.57, 1.11, -2.8]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.72}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mclaren_märke_däckk_ner.geometry}
        material={nodes.Mclaren_märke_däckk_ner.material}
        position={[1.57, 0.62, -2.81]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.72}
      />
      <group
        position={[1.29, 0.85, 2.2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.61}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Material.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Material.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_3.geometry}
          material={materials["Material.049"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_4.geometry}
          material={materials["Material.050"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mutter_Fram.geometry}
        material={materials["Material.051"]}
        position={[1.42, 0.85, 2.21]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.61}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mclaren_märke_fram-däck_upp"].geometry}
        material={nodes["Mclaren_märke_fram-däck_upp"].material}
        position={[1.5, 1.08, 2.21]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.61}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mclaren_märke_fram-däck_ner"].geometry}
        material={nodes["Mclaren_märke_fram-däck_ner"].material}
        position={[1.5, 0.62, 2.2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.61}
      />
    </group>
  );
}

useGLTF.preload(path);