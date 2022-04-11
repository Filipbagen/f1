import './App.css';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, CameraShake } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three'
import styled from "styled-components";

import Car from './Car'
import Steering from './Steering'
import Plane from './Plane';

const Hej = styled.h1`
  font-size: 100px;
`


function Rig({ children }) {
  const ref = useRef()
  const vec = new THREE.Vector3()
  const { camera, mouse } = useThree()
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 3, 5), 0.05)
    ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
    camera.lookAt(0,0,0) 
  })
  return <group ref={ref}>{children}</group>
}


export default function App() {
  return (
    <div>
      <Hej>Possum Fava Lundin</Hej>
      
      <Canvas style={{ height: "75vh", width: "100vw" }} camera={{fov: 75, near: 0.1, far: 1000, position: [0, 0, 10]}} shadowMap >

      <color attach="background" args={['white']} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={1} color="white" position={[0, 5, 0]} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512}/>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
     <Suspense fallback={null}>
       <Rig>
      <Car castShadow/>
      <Steering />
     {/* <Plane /> */}

     <mesh position = {[0, -1, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} >
      <planeGeometry args={[10, 10]} receiveShadow />
      <meshPhongMaterial color='#47C7FC'  />
    </mesh>

    </Rig>
     </Suspense>
     
  </Canvas>
  </div>
  );
}
