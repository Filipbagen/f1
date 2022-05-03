import React from "react"
import '../App.css'
import { Canvas, useFrame, useThree} from '@react-three/fiber';
import { Environment, Lightformer, Float, BakeShadows, ContactShadows, OrbitControls, Stars} from '@react-three/drei';
import { LayerMaterial, Color, Depth } from 'lamina'
import { Suspense, useRef} from 'react';
import styled from "styled-components";
import * as THREE from 'three'
import Steering from './Steering.js'

export default function Page2() {

    return (
        <div>

        <><><div><h1>STEERING WHEEL</h1> </div><div className='rowC'>

       <h1>
        A F1 steering wheel can cost about $40,000 to $100,000. However, it could be more than $100,000 million depending on the level of sophistication.
       </h1>

       <Canvas style={{ margin: '0 auto', height: "55vh", width: "75vw" }} camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }} shadowMap>

         <Steeringlight brightness={30} color={"white"} />
       

        <Rig> 
          <Steering />
        </Rig>

       
       </Canvas>

      <h1>
         The steering wheel of an F1 Car weighs 3-4 pounds, and this will need to be held and controlled by the driver in a high G turn.
       </h1>


     </div></>
     
     <div> <h1>
       Formula One cars use highly automated semi-automatic sequential gearboxes with paddle-shifters, with regulations stating that 8 forward gears.
     </h1></div></> 
     
        </div> 
    );
}


function Steeringlight({ brightness, color }) {
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