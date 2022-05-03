import React from "react"
import './App.js';
import '../App.css'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer, Float, BakeShadows, ContactShadows, OrbitControls, Stars} from '@react-three/drei';
import { LayerMaterial, Color, Depth } from 'lamina'
import { Suspense, useRef} from 'react';
import styled from "styled-components";
import * as THREE from 'three'
import Car from './Car.js'
import Logo from './Logo.js'
import Steering from './Steering'



export default function Page1() {
    return (
        <div>

            {/* <h1 style={{position: 'absolute', fontSize: '164px', top: '150px', left: '300px',color: 'blue'}}>
                Här kan man skriva
            </h1> */}

            {/* style={{ margin: '0 auto', height: "100vh", width: "100vw" }} */}
            <Canvas shadows dpr={[1, 2]} camera={{ position: [-10, 0, 15], fov: 30 }}>
            <Logo />

            <spotLight position={[0, 20, 30]} angle={0.3} penumbra={1} castShadow intensity={5} shadow-bias={-0.0001} />
            <ambientLight intensity={0.2} />
            <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={10} blur={3} opacity={1} far={10} />
            <Stars /> 
            
            <Suspense fallback={null}>
            {/* <Car /> */}
            {/* <Steering />  */}
            
            <OrbitControls />

            {/* Renders contents "live" into a HDRI environment (scene.environment). */}
            <Environment frames={Infinity} resolution={256}>
            {/* Ceiling */}
            <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <MovingSpots />
            {/* Sides */}
            <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
            <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
            <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
            {/* Accent (red) */}
            <Float speed={5} floatIntensity={2} rotationIntensity={2}>
                <Lightformer form="ring" color="#15354A" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
            </Float>
            
            {/* Background */}
            {/* <mesh scale={100}>
                <sphereGeometry args={[1, 64, 64]} />
                <LayerMaterial side={THREE.BackSide}>
                <Color color="#15354A" alpha={1} mode="normal" />
                <Depth colorA="white" colorB="black" alpha={0.5} mode="normal" near={0} far={300} origin={[0, 0, 0]} />
                </LayerMaterial>
            </mesh> */}

            </Environment>
            <BakeShadows />
            {/* <CameraRig /> */}
            </Suspense>
          
            </Canvas>
        </div>
    )
}

function MovingSpots({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
    const group = useRef()
    useFrame((state, delta) => (group.current.position.z += delta * 15) > 60 && (group.current.position.z = -60))
    return (
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
          ))}
        </group>
      </group>
    )
  }
  
function CameraRig({ v = new THREE.Vector3() }) {
return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.lerp(v.set(Math.sin(t / 2), 0, 1.9*10 + Math.cos(t / 2)), 0.005)
    state.camera.lookAt(0, 0, 0)
    })
}