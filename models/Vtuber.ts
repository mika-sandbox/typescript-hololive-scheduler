import { IHashtag } from "./Hashtag";

export interface IVtuber {
  id: number;
  name: string;
  youtube: string;
  twitter: string;
  icon: string;
  illustrator: string;
  hashtags: IHashtag[];
}