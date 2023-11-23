export type RecentlyPlayed = {
  href:    string;
  limit:   number;
  next:    string;
  cursors: Cursors;
  items:   Item[];
}

export type Cursors = {
  after:  string;
  before: string;
}

export type Item = {
  track:     Track;
  played_at: Date;
  context:   Context;
}

export type Context = {
  type:          string;
  href:          string;
  external_urls: ExternalUrls;
  uri:           string;
}

export type ExternalUrls = {
  spotify: string;
}

export type Track = {
  album:             Album;
  artists:           Artist[];
  available_markets: string[];
  disc_number:       number;
  duration_ms:       number;
  explicit:          boolean;
  external_ids:      ExternalIDS;
  external_urls:     ExternalUrls;
  href:              string;
  id:                string;
  name:              string;
  popularity:        number;
  preview_url:       string;
  track_number:      number;
  type:              string;
  uri:               string;
  is_local:          boolean;
}

export type Album = {
  album_type:             string;
  total_tracks:           number;
  available_markets:      string[];
  external_urls:          ExternalUrls;
  href:                   string;
  id:                     string;
  images:                 Image[];
  name:                   string;
  release_date:           Date;
  release_date_precision: string;
  type:                   string;
  uri:                    string;
  artists:                Artist[];
}

export type Artist = {
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  name:          string;
  type:          string;
  uri:           string;
}

export type Image = {
  url:    string;
  height: number;
  width:  number;
}

export type ExternalIDS = {
  isrc: string;
}
