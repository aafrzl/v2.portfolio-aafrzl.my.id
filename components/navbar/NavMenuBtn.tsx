"use client"

import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { useRef } from "react"
import MagneticEffect from "../providers/MagneticEffect"

interface NavMenuBtnProps {
  active: boolean
  toggleHamburger: (status: boolean) => void
}

export default function NavMenuBtn({
  active,
  toggleHamburger,
}: NavMenuBtnProps) {
  const el = useRef<HTMLDivElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    if(!el.current) return console.log("el.current is null")
    const context = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })
      tl.to(el.current, { x: 0, duration: 2, ease: "power4.inOut" }, 0)
    }, el)

    return () => context.kill()
  }, [])

  return (
    <div
      ref={el}
      className="pointer-events-auto absolute right-[2.5%] top-4 z-[51] translate-x-[calc(5rem+2.5vw)]"
    >
      <MagneticEffect>
        <button tabIndex={0} onClick={() => toggleHamburger(!active)}>
          <div
            className={cn(
              "relative flex h-[50px] w-[50px] transform items-center justify-center rounded-full bg-zinc-800 shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 dark:bg-zinc-200",
              { "ring-4": active }
            )}
          >
            <div
              className={cn(
                "flex h-[20px] w-[20px] origin-center transform flex-col justify-between transition-all duration-300",
                { "-rotate-[45deg]": active }
              )}
            >
              <div
                className={cn(
                  "h-[2px] w-1/2 origin-right transform rounded bg-zinc-200 transition-all delay-75 duration-300 dark:bg-zinc-800",
                  { "h-[1px] -translate-y-[1px] -rotate-90": active }
                )}
              ></div>
              <div className="h-[1px] rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div
                className={cn(
                  "h-[2px] w-1/2 origin-left transform self-end rounded bg-zinc-200 transition-all delay-75 duration-300 dark:bg-zinc-800 ",
                  { "h-[1px] translate-y-[1px] -rotate-90": active }
                )}
              ></div>
            </div>
          </div>
        </button>
      </MagneticEffect>
    </div>
  )
}
