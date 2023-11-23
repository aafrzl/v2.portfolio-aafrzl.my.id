"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { useAnimation } from "framer-motion"

interface AnimateWordsProps {
  title: string
  style: string
}

export const AnimateWords = ({ title, style }: AnimateWordsProps) => {
  const ctrls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      ctrls.start("animate")
    }
  }, [ctrls, inView])

  const wordAnimation = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 1,
      },
    },
  }

  return (
    <h1 aria-label={title} role="heading">
      <motion.span
        ref={ref}
        className="flex flex-col overflow-hidden text-center text-[96px] font-extrabold leading-[0.8em] text-zinc-800 dark:text-zinc-200 sm:text-[120px] sm:leading-[0.85em] md:text-[155.5px] lg:text-[215px]"
      >
        {title.split(" ").map((word, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate={ctrls}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className="flex items-center justify-center overflow-hidden"
          >
            <motion.span
              className={style}
              variants={wordAnimation}
            >
              {word + "\u00A0"}
            </motion.span>
          </motion.div>
        ))}
      </motion.span>
    </h1>
  )
}
