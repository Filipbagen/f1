import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import path from '../glb/F1CAR.glb'

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(path);
  return (
    <group ref={group} {...props} dispose={null}
    position={[-1, -5, 0]}
       rotation={[0.1, 0.5, 0]}
        scale={0.9}
      >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[0, 0.26, 2.11]}
        scale={[0.09, 0.14, 0.48]}
      />
      <group
        position={[1.19, -0.11, -2.47]}
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
        position={[1.36, -0.11, -2.5]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.72}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mclaren_märke_däck_upp.geometry}
        material={nodes.Mclaren_märke_däck_upp.material}
        position={[1.45, 0.14, -2.5]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.72}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mclaren_märke_däckk_ner.geometry}
        material={nodes.Mclaren_märke_däckk_ner.material}
        position={[1.45, -0.36, -2.5]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.72}
      />
      <group
        position={[1.17, -0.13, 2.51]}
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
        position={[1.3, -0.13, 2.51]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.61}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mclaren_märke_fram-däck_upp"].geometry}
        material={nodes["Mclaren_märke_fram-däck_upp"].material}
        position={[1.38, 0.1, 2.52]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.61}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mclaren_märke_fram-däck_ner"].geometry}
        material={nodes["Mclaren_märke_fram-däck_ner"].material}
        position={[1.38, -0.36, 2.51]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.61}
      />
    </group>
  );
}

useGLTF.preload(path);