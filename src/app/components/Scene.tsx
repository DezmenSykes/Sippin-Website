'use client'
import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'

const Scene = () => {
  return (
    <Canvas>
        <directionalLight position={[0, 10, 0]} intensity={1} />
    </Canvas>
  )
}

export default Scene