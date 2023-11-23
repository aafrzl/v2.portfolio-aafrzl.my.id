"use client"

import { useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimateBodyProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimateBody({
  text,
  className,
  delay,
}: AnimateBodyProps) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const ctrls = useAnimation()

  const bodyAnimation = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 2,
        delay: delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  return (
    <motion.p
      aria-label={text}
      role="heading"
      className={cn(className)}
      aria-hidden="true"
      initial="hidden"
      animate={ctrls}
      variants={bodyAnimation}
      ref={ref}
    >
      {text}
    </motion.p>
  )
}
