import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import MagneticEffect from "../providers/MagneticEffect"
import ContactLink from "./ContactLink"
import ContactTitle from "./ContactTitle"
import ContactForm from "./ContactForm"
import ContactRounded from "./ContactRounded"

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section relative z-[0] mt-24 flex min-h-screen w-full flex-col items-center justify-center overflow-x-clip bg-zinc-800 dark:bg-zinc-100"
    >
      <ContactRounded />
      <div className="w-full overflow-hidden px-[5%]">
        <div className="contact-content relative flex min-h-[100svh] w-full flex-col items-center justify-between pt-12">
          <ContactTitle title="Contact" />
          <ContactForm />
          <div className="flex w-full justify-between py-12">
            <div>
              <p className="mb-4 text-xl font-semibold text-zinc-200 dark:text-zinc-800">
                Github
              </p>
              <Link
                href="https://github.com/aafrzl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Link"
              >
                <MagneticEffect>
                  <GithubIcon className="h-8 w-8 text-zinc-100 dark:text-zinc-800" />
                </MagneticEffect>
              </Link>
            </div>
            <div className="flex flex-col items-end">
              <p className="mb-4 text-xl font-semibold text-zinc-200 dark:text-zinc-800">
                Links
              </p>
              <div className="flex items-center gap-x-2">
                <ContactLink
                  href="https://instagram.com/aafrzl_"
                  label="Instagram"
                  icon={
                    <InstagramIcon className="text-zinc-200 dark:text-zinc-800" />
                  }
                />
                <ContactLink
                  href="mailto:afrizal.mufriz25@gmail.com"
                  label="Email"
                  icon={
                    <MailIcon className="text-zinc-200 dark:text-zinc-800" />
                  }
                />
                <ContactLink
                  href="https://www.linkedin.com/in/afrizal-mufriz-fouji-8a930111b/"
                  label="LinkedIn"
                  icon={
                    <LinkedinIcon className="text-zinc-200 dark:text-zinc-800" />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
