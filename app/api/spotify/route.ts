import { Artist, CurrentlyPlaying } from "@/types/currently-playing"
import { RecentlyPlayed } from "@/types/recently-played"
import { NextResponse } from "next/server"
import querystring from "querystring"

async function getAccessToken() {
  const token = Buffer.from(
    `${process.env.NEXT_PUBLIC_CLIENT_ID_SPOTIFY}:${process.env.NEXT_PUBLIC_CLIENT_SECRET_SPOTIFY}`
  ).toString("base64")

  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token: process.env.NEXT_PUBLIC_REFRESH_TOKEN_SPOTIFY,
      }),
      next: { revalidate: 3600 },
    })

    const data = await res.json()
    return data.access_token
  } catch (error) {
    console.log(error)
  }
}

async function getCurrentTrack(accessToken: string) {
  const myHeaders = new Headers()
  myHeaders.append("Authorization", `Bearer ${accessToken}}`)

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 0 },
  }

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      requestOptions
    )

    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

async function getLastPlayedTrack(accessToken: string) {
  const myHeaders = new Headers()
  myHeaders.append("Authorization", `Bearer ${accessToken}}`)

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 },
  }

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      requestOptions
    )

    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export async function GET() {
  const accessToken = await getAccessToken()

  try {
    if (accessToken) {
      const track = (await getCurrentTrack(accessToken)) as CurrentlyPlaying
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

      const lastPlayedTrack = (await getLastPlayedTrack(
        accessToken
      )) as RecentlyPlayed
      if (lastPlayedTrack)
        return NextResponse.json({
          name: lastPlayedTrack.items[0].track.name,
          artists: lastPlayedTrack.items[0].track.artists.map(
            (artist: Artist) => {
              return { name: artist.name, href: artist.external_urls.spotify }
            }
          ),
          href: lastPlayedTrack.items[0].track.external_urls.spotify,
          albumArt: lastPlayedTrack.items[0].track.album.images[0],
          currentlyPlaying: false,
        })

      return NextResponse.json(
        { error: "Error fetching track" },
        { status: 500 }
      )
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Error fetching track" }, { status: 500 })
  }

  return NextResponse.json(
    { error: "Error fetching access token" },
    { status: 500 }
  )
}
