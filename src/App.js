import './App.css';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three'
import styled from "styled-components";
import './App.css';

import Steering from './Steering'

const Hej = styled.h1`
  font-size: 75px;
  padding: 50px; 
  margin: auto;
  text-align: center;
  font-weight: 300;
  color: black;
  font-family: 'Bebas Neue', cursive;
`

const Text = styled.p`
font-size: 20px;
margin: auto;
padding: 50px;
font-weight: 300;
color: black;
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

// Lights
function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={10}
      height={10}
      color={color}
      intensity={brightness}
      position={[0, 0, 0]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}
function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={10}
      height={10}
      intensity={brightness}
      color={color}
      position={[0, 0, 0]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}



export default function App() {
  return (
    <div>



      <Hej>STEERING WHEEL</Hej>

      <Canvas style={{margin: '0 auto', height: "55vh", width: "75vw" }} camera={{fov: 75, near: 0.1, far: 1000, position: [0, 0, 10]}} shadowMap >

      <color attach="background" args={['alpha']} />
    
      <OrbitControls enableZoom={true} enablePan={false} enableRotate={false} />

        <KeyLight brightness={50} color={"#ffc9f9"} /> 
        <FillLight brightness={50} color={"white"} />
      
       <Suspense fallback={null}>

       <Rig>
         <Steering 
         metalness={10}
         />
       </Rig>

     </Suspense>
    
  </Canvas>

      <Text>
        Information om ratten, 
      </Text>

  </div>
  );
}
