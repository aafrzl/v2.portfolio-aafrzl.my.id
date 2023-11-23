"use client"

import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"
import { Suspense, useRef } from "react"

function PixelatedSphere() {
  const sphereRef = useRef()

  useFrame(({ clock }: { clock: any }) => {
    if (sphereRef.current) {
      ;(sphereRef.current as any).rotation.y = clock.getElapsedTime() * 1.2
      ;(sphereRef.current as any).rotation.z = clock.getElapsedTime() * 0.7
    }
  })

  return (
    <points ref={sphereRef as any}>
      <icosahedronGeometry args={[1, 4]} />
      <pointsMaterial color="gray" size={0.05} />
    </points>
  )
}

function Birds() {
  const groupRef = useRef()

  useFrame(({ clock }: { clock: any }) => {
    if (!groupRef.current) return
    const elapsedTime = clock.getElapsedTime()
    ;(groupRef.current as any).children.forEach(
      (
        bird: { position: { x: number; y: number; z: number } },
        index: number
      ) => {
        const angle = (elapsedTime + index * 0.2) % (2 * Math.PI)
        const radius = 2.3 + Math.random() * 0.0001
        bird.position.x =
          radius * Math.cos(angle) - Math.sin(elapsedTime * 0.5 + index)
        bird.position.y =
          radius * Math.sin(angle) * Math.sin(elapsedTime * 0.5 + index)
        bird.position.z = radius * Math.cos(elapsedTime * 0.5 + index)
      }
    )
  })

  const birds = [...Array(48)].map((_, i) => {
    const size = i % 2 === 0 ? 0.03 : 0.05
    return (
      <mesh key={i} position={[1, 0, 0]}>
        <planeGeometry args={[size, size]} />
        <meshBasicMaterial color="gray" />
      </mesh>
    )
  })

  return <group ref={groupRef as any}>{birds}</group>
}

export default function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <Canvas
        className="h-1/2 w-1/2 cursor-grab"
        camera={{ fov: 40, position: [0, 0, 5] }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <PixelatedSphere />
          <Birds />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  )
}
