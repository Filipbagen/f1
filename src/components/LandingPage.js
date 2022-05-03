import React from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei'
import Steering from './Steering.js'
import Car from './Car.js'
import Logo from './Logo.js'

import './App.js';
import '../App.css'
import { Environment, Lightformer, Float, BakeShadows, ContactShadows, OrbitControls, stars} from '@react-three/drei';
import { LayerMaterial, Color, Depth } from 'lamina'
import { Suspense, useRef} from 'react';
import styled from "styled-components";
import * as THREE from 'three'

const Text = styled.h3`
    position: absolute;
    top: 250vh;
    color: white; 
    font-weight: bold;
    padding: 40px;
`
const Text2 = styled.h3`
    position: absolute;
    top: 320vh;
    color: white; 
    font-weight: bold;
    padding: 40px;
`

export default function LandingPage() {
    return (
        <div>
            <Canvas style={{position: "absolute", width: "100%", height: "100%"}}>
         
            <Environment frames={Infinity} resolution={256}>
            <Lightformer intensity={0.75} rotation-x={0} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={10} rotation-y={0} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
            <Lightformer intensity={10} rotation-y={0} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
            <Lightformer intensity={10} rotation-y={0} position={[5, -19, 10]} scale={[20, 1, 1]} />
            
            <MovingSpots />
            </Environment>
            <BakeShadows />
                <ScrollControls
                    pages={7} // Each page takes 100% of the height of the canvas
                    distance={1} // A factor that increases scroll bar travel (default: 1)
                    damping={4} // Friction, higher is faster (default: 4)
                    horizontal={false} // Can also scroll horizontally (default: false)
                    infinite={false} // Can also scroll infinitely (default: false)
                    >
                    {/* You can have components in here, they are not scrolled, but they can still
                        react to scroll by using useScroll! */}
                    
                    <Scroll>
                <Suspense fallback={null}>

                
            <Logo /> 
            <Car />
            <Steering />
            
            
            {/* <OrbitControls /> */}


           
            </Suspense>
                </Scroll>
                <Scroll html>
                    <Text>
                     A F1 steering wheel can cost about $40,000 to $100,000. 
                     However, it could be more than $100,000 million depending on the level of sophistication.
                    </Text >
                    <Text2>
                    The steering wheel of an F1 Car weighs 3-4 pounds, 
                    and this will need to be held and controlled by the driver in a high G turn.
                    </Text2 >
                </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    );
}

function MovingSpots({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
    const group = useRef()
    useFrame((state, delta) => (group.current.position.z += delta * 15) > 60 && (group.current.position.z = -60))
    return (
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer form="circle" intensity={15} rotation={[Math.PI / 2, 0, 0]} position={[i, -10, -10]} scale={[3, 1, 1]} />
          ))}
        </group>
      </group>
    )
  }