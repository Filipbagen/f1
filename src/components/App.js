import '../App.css';
import { useThree, useFrame } from '@react-three/fiber';
import { useRef, useState} from 'react';
import * as THREE from 'three'
import { Preload, useCursor } from '@react-three/drei'
import Steering from './Steering';
import Car from './Car';
import LandingPage from './LandingPage';

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
    <div>
      <LandingPage />
    </div>
  ); 
}


