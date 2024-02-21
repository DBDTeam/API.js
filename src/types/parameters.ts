import { Method } from "axios";

export interface NPMSearchEndpointParams {
  results: number;
  text: string;
}

export interface CBannerEndpointParams {
  background: string;
  position?: number;
  text2?: string;
  text: string;
}

export interface CircleEndpointParams {
  background?: string;
  avatar: string;
}

export interface ClydeEndpointParams {
  language?: string;
  text: string;
}
export interface MinecraftDogEndpointParams extends ClydeEndpointParams {}

export interface DiscordEndpointParams {
  background?: string;
  colorname?: string;
  language?: string;
  username: string;
  avatar: string;
  text: string;
}

export interface MyFriendEndpointParams {
  language?: string;
  image: string;
  text: string;
}

export interface ShipEndpointParams {
  avatar1: string;
  avatar2: string;
  emoji?: string;
}

export interface TriggeredEndpointParams {
  avatar: string;
}

export interface TwitterEndpointParams {
  background?: string;
  verified?: boolean;
  language?: string;
  username: string;
  avatar: string;
  name?: string;
  text: string;
}

export interface WelcomeEndpointParams {
  border_color?: string;
  background?: string;
  text_color?: string;
  avatar: string;
  text2?: string;
  text3?: string;
  text1: string;
}

export interface YoutubeADEndpointParams {
  description: string;
  background: string;
  language?: string;
  company: string;
  avatar: string;
  title: string;
}

export interface BoosterCardEndpointParams {
  border_color?: string;
  avatar: string;
}

export interface BinaryEndpointParams {
  option: "decode" | "code";
  text: string;
}
export interface MorseEndpointParams extends BinaryEndpointParams {}
export interface Base64EndpointParams extends BinaryEndpointParams {}

export interface DiscordAPIEndpointParams {
  headers: { Authorization?: string; data?: any };
  version_search?: string;
  token_bot: string;
  method?: Method;
  url: string;
  data?: any;
}

export interface DiscordAvatarEndpointParams {
  headers: { authorization: string; avatar?: string };
  avatar?: string;
}

export interface TextEndpointParams {
  text: string;
}

export interface CalculatorEndpointParams {
  operation: string;
}
export interface ASTEndpointParams extends CalculatorEndpointParams {}

export interface FindColorEndpointParams {
  color: string;
}

export interface MCServerEndpointParams {
  server: string;
}

export interface MCUserEndpointParams {
  user: string;
  size: number;
}

export interface NumberFormaterEndpointParams {
  option: "abb" | "dea";
  number: number | string;
}

export interface PeriodicTableEndpointParams {
  str: string;
}

export interface TranslateEndpointParams {
  text: string;
  from?: string;
  to: string;
}

export type EndpointParams = {
  "periodic-table": PeriodicTableEndpointParams;
  numberformater: NumberFormaterEndpointParams;
  discordavatar: DiscordAvatarEndpointParams;
  minecraftdog: MinecraftDogEndpointParams;
  boostercard: BoosterCardEndpointParams;
  discordapi: DiscordAPIEndpointParams;
  calculator: CalculatorEndpointParams;
  youtubeads: YoutubeADEndpointParams;
  translate: TranslateEndpointParams;
  npmsearch: NPMSearchEndpointParams;
  triggered: TriggeredEndpointParams;
  findcolor: FindColorEndpointParams;
  discordemoji: TextEndpointParams;
  mcserver: MCServerEndpointParams;
  myfriend: MyFriendEndpointParams;
  reversetext: TextEndpointParams;
  discord: DiscordEndpointParams;
  welcome: WelcomeEndpointParams;
  twitter: TwitterEndpointParams;
  cbanner: CBannerEndpointParams;
  circle: CircleEndpointParams;
  base64: Base64EndpointParams;
  binary: BinaryEndpointParams;
  mcuser: MCUserEndpointParams;
  qrcode: TextEndpointParams;
  sha256: TextEndpointParams;
  owoify: TextEndpointParams;
  pbkdf2: TextEndpointParams;
  clyde: ClydeEndpointParams;
  morse: MorseEndpointParams;
  ascii: TextEndpointParams;
  ship: ShipEndpointParams;
  mock: TextEndpointParams;
  aes: TextEndpointParams;
  ast: TextEndpointParams;
};
