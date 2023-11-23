import { Discord } from "@/types/discord"
import useSWR from "swr"

export function useGetDataDiscordServer() {
  const fetcher = (url: string) =>
    fetch(url).then(async (res) => {
      if (res.ok) return res.json()
      else return Promise.reject(await res.json())
    })

  const { data, error, isLoading } = useSWR<Discord>(
    "https://discord.com/api/guilds/1172202073216000010/widget.json",
    fetcher,
    process.env.NODE_ENV === "production" ? { refreshInterval: 3000 } : {}
  )

  return {
    data,
    isLoading,
    error,
  }
}
