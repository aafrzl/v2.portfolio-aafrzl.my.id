export type CurrentlyPlaying = {
  context: Context
  timestamp: number
  progress_ms: number
  is_playing: boolean
  item: Item
  currently_playing_type: string
  actions: Actions
}

export type Actions = {
  disallows: Disallows
}

export type Disallows = {
  resuming: boolean
}

export type Context = {
  type: string
  href: string
  external_urls: ExternalUrls
  uri: string
}

export type ExternalUrls = {
  spotify: string
}

export type Item = {
  album: Album
  artists: Artist[]
  available_markets: any[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIDS
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  popularity: number
  preview_url: null
  track_number: number
  type: string
  uri: string
  is_local: boolean
}

export type Album = {
  album_type: string
  total_tracks: number
  available_markets: any[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: Date
  release_date_precision: string
  type: string
  uri: string
  artists: Artist[]
}

export type Artist = {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export type Image = {
  url: string
  height: number
  width: number
}

export type ExternalIDS = {
  isrc: string
}
