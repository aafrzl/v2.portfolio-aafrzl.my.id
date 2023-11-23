export type Discord = {
  id:             string;
  name:           string;
  instant_invite: string;
  channels:       any[];
  members:        Member[];
  presence_count: number;
}

export type Member = {
  id:            string;
  username:      string;
  discriminator: string;
  avatar:        null;
  status:        Status;
  avatar_url:    string;
  game?:         Game;
}

export type Game = {
  name: string;
}

export enum Status {
  DND = "dnd",
  Idle = "idle",
  Online = "online",
}
