import { useFormStatus } from "react-dom"
import MagneticEffect from "../providers/MagneticEffect"

export default function ContactSubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" className="mt-4" aria-disabled={pending}>
      <MagneticEffect>
        <p className="py-3 text-neutral-400 transition-colors duration-200 group-hover:text-neutral-100">
          {pending ? "Sending..." : "Send Message"}
        </p>
      </MagneticEffect>
      <div className="h-[2px] w-full bg-neutral-400/70 transition-colors duration-200 group-hover:bg-neutral-100">
        <span
          className={
            " translate-y-full text-sm font-light transition-colors duration-200 lg:text-base"
          }
        ></span>
      </div>
    </button>
  )
}
