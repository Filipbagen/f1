import { Environment, Lightformer, BakeShadows } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import { useRef, state} from 'react';

export default function Lights() {
    return (
        <>
            <ambientLight intensity={1} />

            {/* <pointLight 
            intensity={2} 
            position={[0, 20, -10]} 
            castShadow
            shadow-mapSize-height={2048}
            shadow-mapSize-width={2048}
            /> */}
                <Environment frames={Infinity} resolution={256}>
                  
                    <Lightformer intensity={0} rotation-x={0} position={[0, -18, -18]} scale={[10, 10, 1]} />
                    
                    <Lightformer intensity={10} rotation-y={0} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
                    <Lightformer intensity={10} rotation-y={0} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
                    <Lightformer intensity={10} rotation-y={0} position={[5, -19, 10]} scale={[20, 1, 1]} /> 
                    <MovingSpots />
                </Environment>
                <BakeShadows />
        </>
    );
}

// Endast för steering wheel 

// function MovingSpots({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
//     const group = useRef()
//     useFrame((delta) => (group.current.position.z += delta * 15) > 60 && (group.current.position.z = -60))
//     return (
//         <group rotation={[0, 0.5, 0]}>
//             <group ref={group}>
//                 {positions.map((x, i) => (
//                     <Lightformer form="circle" intensity={15} rotation={[Math.PI / 2, 0, 0]} position={[i, -10, -10]} scale={[3, 1, 1]} />
//                 ))}
//             </group>
//         </group>
//     )
// }

// För allt 
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