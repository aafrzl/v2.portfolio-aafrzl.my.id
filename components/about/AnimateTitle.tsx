"use client"

import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimateTitleProps {
  title: string
  className?: string
  wordSpace: string
  charSpace: string
  delay?: number
}

export default function AnimateTitle({
  title,
  className,
  wordSpace,
  charSpace,
}: AnimateTitleProps) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const ctrls = useAnimation()

  useEffect(() => {
    if (inView){
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  const wordAnimation = {
    hidden: {},
    visible:{},
  }

  const charAnimation = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 2.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      }
    }
  }

  return (
    <h2 aria-label={title} role="heading" className={className}>
      {title.split(" ").map((word, i) => (
        <motion.span
          key={i}
          ref={ref}
          aria-hidden="true"
          initial="hidden"
          animate={ctrls}
          variants={wordAnimation}
          transition={{
            delayChildren: i * 0.25,
            staggerChildren: 0.05,
          }}
          className={cn("inline-block whitespace-nowrap", wordSpace)}
        >
          {word.split(" ").map((char, i) => (
            <motion.span 
            aria-hidden="true"
            variants={charAnimation}
            key={i} className={cn("inline-block", charSpace)}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </h2>
  )
}
