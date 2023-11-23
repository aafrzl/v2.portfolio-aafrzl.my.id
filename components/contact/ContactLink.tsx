import Link from "next/link"
import MagneticEffect from "../providers/MagneticEffect"

interface ContactLinkProps {
  href: string
  label: string
  icon: React.ReactNode
}

export default function ContactLink({ href, label, icon }: ContactLinkProps) {
  return (
    <Link
      href={href}
      target={label !== "Email" ? "_blank" : "_self"}
      aria-label={label !== "Email" ? "noopener noreferrer" : ""}
      className="mx-2"
    >
      <MagneticEffect>
        {icon}
        <div className="absolute -bottom-[2px] h-[2px] w-full origin-center scale-x-0 rounded-full bg-foreground/30 transition-transform hover:translate-y-2 hover:scale-x-100" />
      </MagneticEffect>
    </Link>
  )
}
