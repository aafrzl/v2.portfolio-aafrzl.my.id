import { useGetDataDiscordServer } from "@/hooks/useGetDataDiscordServer"
import Image from "next/image"
import Link from "next/link"
import { LogoDiscord } from "../LogoIcon"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function DiscordServer() {
  const { data, error, isLoading } = useGetDataDiscordServer()

  if (isLoading || error) {
    return (
      <div
        className={`flex justify-center items-start min-w-[250px] rounded-xl bg-zinc-200 p-3 pr-3 dark:bg-zinc-800 md:pr-10`}
      >
        <div className="w-[75px] animate-pulse overflow-hidden rounded-lg p-5 sm:w-[100px]">
          <LogoDiscord className="h-8 w-8" />
        </div>

        <div className="mx-5">
          <div className="mb-5 mt-1">
            <div className="w-28 animate-pulse rounded-full bg-zinc-300 p-2 dark:bg-zinc-800 sm:w-40"></div>
          </div>
          <div className="mb-2 w-32 animate-pulse rounded-full bg-zinc-300 p-3 dark:bg-zinc-800 sm:w-48"></div>
          <div className="w-40 animate-pulse rounded-full bg-zinc-300 p-2 dark:bg-zinc-800 sm:w-52"></div>
        </div>
      </div>
    )
  }

  if (data)
    return (
      <div
        className="flex items-center justify-start min-w-[250px] max-w-full rounded-xl bg-zinc-200 p-3 dark:bg-zinc-800"
      >
        <Link
          href={String(data?.instant_invite)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-[75px] overflow-hidden rounded-lg sm:w-[100px]">
            <Image
              src="/images/og-images.jpg"
              alt="Album art"
              width={100}
              height={100}
              className="grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
            />
            <div className="absolute bottom-0 right-3 z-20 w-6">
              <LogoDiscord className="h-8 w-8" />
            </div>
          </div>
        </Link>

        <div className="mx-5 overflow-x-hidden">
          <Link
            href={String(data?.instant_invite)}
            className="mb-3 text-xs font-semibold hover:underline sm:text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data?.name}
          </Link>
          <p className="mb-2 text-xs font-medium sm:text-sm">
            {data?.presence_count} members online
          </p>
          <div className="relative flex items-center justify-start -space-x-4">
            {data?.members?.slice(0, 10).map((member, i) => (
              <Avatar
                key={i}
                className="relative z-10 h-6 w-6 ring-1 ring-zinc-800 dark:ring-zinc-200"
              >
                <AvatarImage src={member.avatar_url} alt={member.username} />
                <AvatarFallback>{member.username}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </div>
    )
}
