"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimateHeadingProps {
  title: string
  className?: string
  delay?: number
}

export default function AnimateHeading({
  title,
  className,
  delay,
}: AnimateHeadingProps) {
  const ref = useRef(null)
  const ctrls = useAnimation()
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  const headingAnimation = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1.8,
        delay: delay,
        ease: "easeInOut"
      },
    },
  }

  return (
    <h3 className={cn("text-2xl font-bold", className)}>
      <motion.span
        ref={ref}
        aria-hidden="true"
        role="hidden"
        initial="hidden"
        animate={ctrls}
        variants={headingAnimation}
      >
        {title}
      </motion.span>
    </h3>
  )
}
