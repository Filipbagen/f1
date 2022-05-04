import React from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Scroll, Stats } from '@react-three/drei'
import Steering from './Steering.js'
import Car from './Car.js'
import Logo from './Logo.js'

import './App.js';
import '../App.css'
import { Environment, Lightformer, Float, BakeShadows, ContactShadows, OrbitControls, stars } from '@react-three/drei';
import { LayerMaterial, Color, Depth } from 'lamina'
import { Suspense, useRef } from 'react';
import styled from "styled-components";
import * as THREE from 'three'
import SteeringText from './SteeringText.js'
import { AmbientLight } from "three"


export default function LandingPage() {
    return (
        <div>
            <Canvas style={{ position: "absolute", width: "100%", height: "100%" }} frameloop="demand">
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
                            <mesh position={[0, -5.7, -3]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[6, 10, 0.3]}>
                                <boxBufferGeometry color={"black"} />
                                <meshLambertMaterial reflectivity={100} refractionRatio={100} />
                            </mesh>
                            <Steering />
                            <Logo />
                            <Car />
                            {/* <OrbitControls /> */}
                        </Suspense>
                    </Scroll>
                    <Scroll html>
                        <SteeringText />
                    </Scroll>
                </ScrollControls>
                <Stats />
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