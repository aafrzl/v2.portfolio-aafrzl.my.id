import { cn } from "@/lib/utils"

interface ContactFormLineProps {
  inputId: number
  hasError: boolean
}

export default function ContactFormLine({
  inputId,
  hasError,
}: ContactFormLineProps) {
  return (
    <svg
      viewBox="0 0 300 100"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        `input-line-${inputId}`,
        "pointer-events-none absolute bottom-0 right-0 h-[90px] w-[300%] fill-none stroke-[1.75] transition-colors duration-300 will-change-transform",
        hasError
          ? "stroke-red-500/70 peer-focus:!stroke-red-500"
          : "stroke-zinc-200 dark:stroke-zinc-800 peer-focus:!stroke-zinc-200/50 dark:peer-focus:!stroke-zinc-800/50"
      )}
      preserveAspectRatio="none"
    >
      <path d="M0 90H100C110 90 120 84 130 78C140 72 160 72 170 78C180 84 190 90 200 90H300" />
    </svg>
  )
}
