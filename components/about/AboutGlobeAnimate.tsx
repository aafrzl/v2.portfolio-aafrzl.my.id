"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import DigitalGlobe from "../DigitalGlobe"

export default function AboutGlobeAnimate() {
  const ref = useRef(null)
  const ctrls = useAnimation()
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  const globeAnimation = {
    hidden: {
      opacity: 0,
      x: `1em`,
    },
    visible: {
      opacity: 1,
      x: `0em`,
      transition: {
        duration: 1,
        delay: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.div
      aria-hidden="true"
      ref={ref}
      initial="hidden"
      animate={ctrls}
      variants={globeAnimation}
    >
      <DigitalGlobe className="hidden h-24 w-24 md:block" />
    </motion.div>
  )
}
