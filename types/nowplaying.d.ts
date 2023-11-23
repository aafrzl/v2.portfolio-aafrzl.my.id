export type NowPlaying = {
  name: string
  artists: Artist[]
  href: string
  albumArt: AlbumArt
  currentlyPlaying: boolean
}

export type AlbumArt = {
  height: number
  url: string
  width: number
}

export type Artist = {
  name: string
  url: string
}
