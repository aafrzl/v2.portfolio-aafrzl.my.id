"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { clamp } from "three/src/math/MathUtils.js"

interface MagneticEffectProps {
  children: React.ReactNode
}

export default function MagneticEffect({ children }: MagneticEffectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e
    const {
      height = 0,
      width = 0,
      left = 0,
      top = 0,
    } = ref.current?.getBoundingClientRect() ?? {}
    const maxDistance = 100
    const strength = 30

    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)

    const distance = Math.sqrt(middleX ** 2 + middleY ** 2)

    const radius = clamp(distance, 0, maxDistance)

    const theta = Math.atan2(middleY, middleX)

    const force = radius / maxDistance

    const x = Math.cos(theta) * force * strength
    const y = Math.sin(theta) * force * strength

    setPosition({ x, y })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  )
}
