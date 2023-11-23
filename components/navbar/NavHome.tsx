"use client"

import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect"
import gsap from "gsap"
import { Code2 } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export default function NavHome() {
  const el = useRef<HTMLDivElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })
      tl.to(el.current, { x: 0, duration: 2, ease: "power4.inOut" }, 0)
    }, el)
  }, [])

  return (
    <div
      ref={el}
      className="pointer-events-auto absolute left-[2.5%] top-5 translate-x-[calc(-15rem-2.5vw)] md:top-4"
    >
      <div className="overflow-hidden pb-1">
        <Link href="/" className="group inline-flex items-center gap-x-2">
          <Code2 className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:rotate-[20deg]" />
          <p className="text-md font-semibold uppercase">Coding with Afrizal</p>
        </Link>
      </div>
    </div>
  )
}
