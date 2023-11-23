import React, { useRef } from "react"
import Spotify from "./Spotify"
import TiktokEmbed from "./TiktokEmbed"
import DiscordServer from "./DiscordServer"
import { useAnimation, useInView, motion } from "framer-motion"

export default function SocialMedia() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref)
  const ctrls = useAnimation()

  React.useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  const AnimationSocialMedia = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1.8,
        delay: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      initial="hidden"
      animate={ctrls}
      variants={AnimationSocialMedia}
      className="flex w-full flex-col justify-between gap-4 lg:flex-row"
    >
      <Spotify />
      <TiktokEmbed />
      <DiscordServer />
    </motion.div>
  )
}
