import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateBody from "./AnimateBody"
import AnimateHeading from "./AnimateHeading"
import AnimateParagraph from "./AnimateParagraph"
import AnimateTitle from "./AnimateTitle"
import DiscordServer from "./DiscordServer"
import GithubGraph from "./GithubGraph"
import SocialMedia from "./SocialMedia"
import Spotify from "./Spotify"
import TiktokEmbed from "./TiktokEmbed"

export default function About() {
  return (
    <section
      id="about"
      className="relative mb-10 flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title={"About me"}
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <AboutGlobeAnimate />
        </div>

        <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="lg:mg-16 mb-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:max-w-[90%] lg:text-base">
            <AnimateParagraph
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis."
              delay={1.5}
            />
            <AnimateParagraph
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis."
              delay={1.8}
            />
            <AnimateParagraph
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis."
              delay={2}
            />
            <AnimateParagraph
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis."
              delay={2.5}
            />
          </div>

          <div className="mb-24 flex w-full flex-col gap-4 leading-relaxed tracking-wide sm:mb-32 md:mb-40 md:gap-6 md:leading-relaxed lg:mb-16 lg:max-w-[90%]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Frontend Tools" delay={0.5} />

              <AnimateBody
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis."
                delay={1}
                className="text-sm"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="UI Tools" delay={1.4} />
              <AnimateBody
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis."
                delay={1.5}
                className="text-sm"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Design Tools" delay={1.6} />
              <AnimateBody
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, perspiciatis."
                delay={2}
                className="text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-4 lg:max-w-[1200px] ">
          <GithubGraph />
          <SocialMedia />
        </div>
      </div>
    </section>
  )
}
