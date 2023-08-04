import React from 'react'
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

// Background color behind shirt

const Backdrop = () => {
  return (
    <AccumulativeShadows>
      <RandomizedLight />
    </AccumulativeShadows>
  )
}

export default Backdrop