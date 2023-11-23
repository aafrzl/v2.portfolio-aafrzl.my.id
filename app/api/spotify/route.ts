import {
  getAccessToken,
  getCurrentTrack,
  getLastPlayedTrack,
} from "@/lib/spotify"
import { Artist, CurrentlyPlaying } from "@/types/currently-playing"
import {
  RecentlyPlayed,
  Artist as ArtistRecenly,
} from "@/types/recently-played"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  const accessToken = await getAccessToken()
  const track = (await getCurrentTrack(accessToken)) as CurrentlyPlaying
  const lastTrack = (await getLastPlayedTrack(accessToken)) as RecentlyPlayed

  if (!accessToken)
    return NextResponse.json(
      {
        error: "Error fetching access_token from Spotify",
      },
      { status: 500 }
    )

  if (track)
    return NextResponse.json({
      name: track.item.name,
      artists: track.item.artists.map((artist: Artist) => {
        return { name: artist.name, href: artist.external_urls.spotify }
      }),
      href: track.item.external_urls.spotify,
      albumArt: track.item.album.images[0],
      currentlyPlaying: true,
    })

  if (lastTrack)
    return NextResponse.json({
      name: lastTrack.items[0].track.name,
      artists: lastTrack.items[0].track.artists.map((artist: ArtistRecenly) => {
        return {
          name: artist.name,
          href: artist.external_urls.spotify,
        }
      }),
      href: lastTrack.items[0].track.external_urls.spotify,
      albumArt: lastTrack.items[0].track.album.images[0],
      currentlyPlaying: false,
    })

  return NextResponse.json(
    {
      error: "Error fetching data from Spotify",
    },
    { status: 500 }
  )
}
