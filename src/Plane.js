import React from "react"

export default function Plane(props) {
  return (
    <mesh receiveShadow rotation-x={-Math.PI / 2} {...props} position={[0, -3.7, 0]}>
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      <shadowMaterial attach="material" transparent opacity={0.4} />
    </mesh>
  )
}