import React from "react"
import { Separator } from "../ui/separator"

interface NavMenuLineProps {
  title: string
}

export default function NavMenuLine({ title }: NavMenuLineProps) {
  return (
    <div className="px-[clamp(1.25rem,3vw,2.5rem)]">
      <span className="text-xl font-semibold text-zinc-200 dark:text-zinc-800">
        {title}
      </span>
      <Separator className="mt-2 mb-2 bg-zinc-200/50 dark:bg-zinc-800/25" />
    </div>
  )
}
