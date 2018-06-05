import { IHashtag } from "./Hashtag";
import { IYouTube } from "./YouTube";

export interface IVtuber {
  id: string;
  name: string;
  youtube: IYouTube;
  twitter: string;
  icon: string;
  illustrator: string;
  hashtags: IHashtag[];
}