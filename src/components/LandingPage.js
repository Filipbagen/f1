import React from "react"
import { Flex, Box } from '@react-three/flex'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll, Stats, OrbitControls, Stars,Html } from '@react-three/drei'
import { Suspense } from 'react'
import SteeringText from './SteeringText.js'
import Lights from "./Lights.js"
import Steering from './Steering.js'
import Car from './Car.js'
import Logo from './Logo.js'
import './App.js'
import '../App.css'

export default function LandingPage() {
    return (
        <div>
            <Canvas 
            shadows
            style={{ position: "absolute", width: "100%", height: "100%", background: "linear-gradient(#47C7FC, black)"}}>
            <Stars/> 
            <Lights />
            
            <Flex justifyContent="fle">
                <Box >
                    {/* <Logo /> */}
                </Box>
            </Flex>

            <pointLight 
            intensity={10} 
            position={[0, 20, -10]} 
            castShadow
            shadow-mapSize-height={2048}
            shadow-mapSize-width={2048}
            />
                
                <ScrollControls
                    pages={7} // Each page takes 100% of the height of the canvas
                    distance={1} // A factor that increases scroll bar travel (default: 1)
                    damping={4} // Friction, higher is faster (default: 4)
                    horizontal={false} // Can also scroll horizontally (default: false)
                    infinite={false} // Can also scroll infinitely (default: false)
                >
                    <Scroll>
                        <Suspense fallback={null}>
                            
                            <mesh castShadows position={[0, -4.85, -5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[10, 10, 0.1]} 
                            receiveShadow >
                                <boxBufferGeometry />
                                <meshPhongMaterial reflectivity={100} shininess={0} color={"black"} />
                            </mesh>
                            {/* <OrbitControls/>  */}
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