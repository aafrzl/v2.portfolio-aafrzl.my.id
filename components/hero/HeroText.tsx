import React from "react"
import { AnimateWords } from "./AnimateWords"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center">
        <AnimateWords
          title="AFRIZAL MUFRIZ FOUJI"
          style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
        />
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: `0em`,
            transition: {
              delay: 1.5,
              duration: 1,
              ease: [0.2, 0.65, 0.3, 0.9],
            },
          }}
          className="absolute bottom-14 mx-auto cursor-pointer md:bottom-24 xl:bottom-32"
        >
          <Image
            src={"/images/og-images.jpg"}
            width={150}
            height={150}
            priority
            alt="Afrizal Mufriz Fouji"
            className="h-full w-[100px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
          />
        </motion.div>
      </div>
    </div>
  )
}
