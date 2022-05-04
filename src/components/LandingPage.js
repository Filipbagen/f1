import React from "react"
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll, Stats, Reflector, Html } from '@react-three/drei'
import { Suspense } from 'react';
import SteeringText from './SteeringText.js'
import Lights from "./Lights.js"
import Steering from './Steering.js'
import Car from './Car.js'
import Logo from './Logo.js'
import './App.js';
import '../App.css'

export default function LandingPage() {
    return (
        <div>
            <Canvas style={{ position: "absolute", width: "100%", height: "100%" }}>
            <Lights />
                <Logo />

                <ScrollControls
                    pages={7} // Each page takes 100% of the height of the canvas
                    distance={1} // A factor that increases scroll bar travel (default: 1)
                    damping={4} // Friction, higher is faster (default: 4)
                    horizontal={false} // Can also scroll horizontally (default: false)
                    infinite={false} // Can also scroll infinitely (default: false)
                >
                    <Scroll>
                        <Suspense fallback={null}>
                        
                            <mesh position={[0, -5.7, -3]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[6, 10, 0.3]}>
                                <boxBufferGeometry />
                                <meshStandardMaterial metalness={10} roughness={0.5} color={"black"} />
                            </mesh>
                            
                            <Steering />
                            <Car />
                            

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