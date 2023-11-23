import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimateParagraphProps {
  paragraph: string
  className?: string
  delay?: number
}

export default function AnimateParagraph({
  paragraph,
  className,
  delay,
}: AnimateParagraphProps) {
  const ref = useRef(null)
  const ctrls = useAnimation()
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  const AnimationParagraph = {
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
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <p className={cn("text-sm", className)}>
      <motion.span
        ref={ref}
        aria-hidden="true"
        initial="hidden"
        animate={ctrls}
        variants={AnimationParagraph}
      >
        {paragraph}
      </motion.span>
    </p>
  )
}
