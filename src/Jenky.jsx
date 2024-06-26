/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 jenky.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/jenky.glb')

  return (<>
  <OrbitControls
    autoRotate={[true]}
    autoRotateSpeed = {18}
    enableZoom={false}
  />
    <group {...props} dispose={null}>
      <group position={[0.15, -2, 0]} scale={4}>
        <primitive object={nodes.root} />
        <skinnedMesh geometry={nodes.Roundcube002.geometry} material={materials['Material.002']} skeleton={nodes.Roundcube002.skeleton} />
      </group>
    </group>
    </>
  )
}

useGLTF.preload('/jenky.glb')
