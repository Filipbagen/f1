import './App.css';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense, useRef, useState} from 'react';
import * as THREE from 'three'
import styled from "styled-components";

import { Preload, useCursor } from '@react-three/drei'

import Steering from './Steering';
import Car from './Car';

import mainLogo from './logo.png';

const Title = styled.h1`
  font-size: 100px;
  padding: 300px; 
  margin-top: 200px;
  margin: auto;
  text-align: center;
  font-weight: 300;
  color: black;
  font-family: 'Bebas Neue', cursive;
`

const Text = styled.p`
font-size: 18px;
margin: auto;
padding: 50px;
font-weight: 10;
color: black;
font-family: 'Bebas Neue', cursive;
`

const Text2 = styled.p`
font-size: 18px;
margin: auto;
padding: 80px;
font-weight: 10;
color: black;
font-family: 'Bebas Neue', cursive;
`

const ImgStyle = styled.img`
height: 25%;
width: 25%;
padding: 100px;
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
function Carlight({ brightness, color }) {
  return (
    <rectAreaLight
      width={5}
      height={5}
      intensity={brightness}
      color={color}
      position={[5, 3, 5]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}

function ChangeModel() {
  const vec = new THREE.Vector3()
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)
  useFrame((state) => {
    state.camera.position.lerp(vec.set(clicked ? -10 : 0, clicked ? 10 : 0, 20), 0.1)
    state.camera.lookAt(0, 0, 0)
  })
  return (
    <group>
      <Steering visible={clicked} />
      <Car visible={!clicked} onClick={() => setClicked(true)} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} />
    </group>
  )
}



export default function App() {
  return (

    <><div>
      <ImgStyle src={mainLogo}/>
    </div>

    {/* Klickar man på den första bilen byter man model till ratten, kul grej. */}
    <Canvas dpr={[1, 2]} style={{ margin: '0 auto', height: "55vh", width: "75vw" }}  orthographic camera={{ zoom: 100 }}>
    <Carlight brightness={50} color={"white"} />
      <Suspense fallback={null}>
        <ChangeModel />
        <Preload all />
      </Suspense>
    </Canvas>
    
    {/* Andra bilen */}
    <Canvas style={{ margin: '0 auto', height: "55vh", width: "75vw" }} camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }} shadowMap>

      <color attach="background" args={['white']} />

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Carlight brightness={50} color={"white"} />

      <Suspense fallback={null}>
        <Rig>
          <Car />
        </Rig>

      </Suspense>


    {/* Steering wheel segment */}
    </Canvas><><><div><Title>STEERING WHEEL</Title> </div><div className='rowC'>

      <Text>
        A F1 steering wheel can cost about $40,000 to $100,000. However, it could be more than $100,000 million depending on the level of sophistication.
      </Text>

      <Canvas style={{ margin: '0 auto', height: "55vh", width: "75vw" }} camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }} shadowMap>
         <color attach="background" args={['white']} />
  
        <OrbitControls enableZoom={true} enablePan={false} enableRotate={false} />
        <Steeringlight brightness={30} color={"white"} />
        <Suspense fallback={null}>

          <Rig>
            <Steering />
          </Rig>

        </Suspense>
      </Canvas>

      <Text>
        The steering wheel of an F1 Car weighs 3-4 pounds, and this will need to be held and controlled by the driver in a high G turn.
      </Text>


    </div></><div> <Text2>
      Formula One cars use highly automated semi-automatic sequential gearboxes with paddle-shifters, with regulations stating that 8 forward gears.
    </Text2></div></></>
  
  );
}
