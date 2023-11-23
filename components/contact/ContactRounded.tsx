"use client"

import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

export default function ContactRounded() {
  const el = useRef<HTMLDivElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-round",
        { scale: 1 },
        {
          scaleY: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el.current,
            scrub: 1,
            start: "center bottom",
            end: "center top",
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={el}
      className="pointer-events-none absolute left-[-10%] top-0 z-10 h-[500px] w-[120%] md:h-[600px] lg:h-[800px] -translate-y-1/2"
    >
      <div className="contact-round h-full w-full rounded-br-[100%] rounded-bl-[100%] bg-zinc-50 dark:bg-zinc-900" />
    </div>
  )
}
