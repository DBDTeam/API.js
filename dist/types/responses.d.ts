export interface BaseEndpointResponse {
    response: number;
    status: number;
}
export interface NumberFormaterEndpointResponse extends BaseEndpointResponse {
    original: string;
    number: string;
}
export interface NPMSearchEndpointResponse extends BaseEndpointResponse {
    result: {
        finded: Array<Record<string, unknown>>;
        total: number;
    };
}
export interface MCUserEndpointResponse extends BaseEndpointResponse {
    username_history: Array<{
        username: string;
    }>;
    username: string;
    uuid: string;
}
export interface MCServerEndpointResponse extends BaseEndpointResponse {
    server: Record<string, unknown>;
}
export interface CalculatorEndpointResponse extends BaseEndpointResponse {
    calculate: number;
    original: {
        converted: string;
        no_converted: string;
    };
}
export interface ASTEndpointResponse extends BaseEndpointResponse {
    evaluate?: {
        symbol?: Record<string, unknown>;
    };
    result?: {
        result?: Record<string, unknown>;
    };
    original?: {
        converted?: string;
        no_converted?: string;
    };
}
export interface Sha256EndpointResponse extends BaseEndpointResponse {
    results: {
        base64: string;
        hex: string;
    };
    original: string;
}
export interface Pbkdf2EndpointResponse extends BaseEndpointResponse {
    results: {
        salt: {
            words: number[];
            sigBytes: number;
        };
        text: {
            $super: {
                $super: {};
            };
            words: number[];
            sigBytes: number;
        };
    };
    original: string;
}
export interface DiscordEmojiEndpointResponse extends BaseEndpointResponse {
    original: string;
    text: string;
}
export interface ReverseTextEndpointResponse extends DiscordEmojiEndpointResponse {
}
export interface OwOIfyEndpointResponse extends DiscordEmojiEndpointResponse {
}
export interface MockEndpointResponse extends DiscordEmojiEndpointResponse {
}
export interface DiscordAPIEndpointResponse extends BaseEndpointResponse {
    result: Record<string, unknown>;
}
export interface PeriodicTableEndpointResponse extends DiscordAPIEndpointResponse {
}
export interface BinaryEndpointResponse extends BaseEndpointResponse {
    original: string;
    text: string;
}
export interface MorseEndpointResponse extends BinaryEndpointResponse {
}
export interface Base64EndpointResponse extends BaseEndpointResponse {
    result: string;
}
export interface DiscordAvatarEndpointResponse extends Base64EndpointResponse {
}
export interface AsciiEndpointResponse extends BaseEndpointResponse {
    original: string;
    text: string;
}
export interface AesEndpointResponse extends AsciiEndpointResponse {
}
export interface WouldYouRatherEndpointResponse extends BaseEndpointResponse {
    selected: {
        option1: string;
        option2: string;
    };
}
export interface JokeEndpointResponse extends BaseEndpointResponse {
    joke: string;
}
export interface FurryEndpointResponse extends BaseEndpointResponse {
    time: number;
    ID: string;
}
export interface CanvasEndpointResponse extends BaseEndpointResponse {
    url: string;
}
export interface TranslateEndpointResponse extends BaseEndpointResponse {
    result: {
        text: string;
        userLang: string;
        translation: string;
        language: {
            from: string;
            to: string;
            score: number;
        };
    };
}
export type EndpointResponses = {
    "periodic-table": PeriodicTableEndpointResponse;
    wouldyourather: WouldYouRatherEndpointResponse;
    numberformater: NumberFormaterEndpointResponse;
    discordavatar: DiscordAvatarEndpointResponse;
    discordemoji: DiscordEmojiEndpointResponse;
    greets_goodmorning: FurryEndpointResponse;
    greets_particular: FurryEndpointResponse;
    reversetext: ReverseTextEndpointResponse;
    snuggle_someone: FurryEndpointResponse;
    discordapi: DiscordAPIEndpointResponse;
    calculator: CalculatorEndpointResponse;
    sleep_snuggle: FurryEndpointResponse;
    snuggle_onbox: FurryEndpointResponse;
    minecraftdog: CanvasEndpointResponse;
    translate: TranslateEndpointResponse;
    npmsearch: NPMSearchEndpointResponse;
    greets_hello: FurryEndpointResponse;
    boostercard: CanvasEndpointResponse;
    mcserver: MCServerEndpointResponse;
    snuggle_box: FurryEndpointResponse;
    youtubeads: CanvasEndpointResponse;
    bye_greets: FurryEndpointResponse;
    triggered: CanvasEndpointResponse;
    myfriend: CanvasEndpointResponse;
    puppeyes: FurryEndpointResponse;
    discord: CanvasEndpointResponse;
    welcome: CanvasEndpointResponse;
    twitter: CanvasEndpointResponse;
    cbanner: CanvasEndpointResponse;
    credits: FurryEndpointResponse;
    snuggle: FurryEndpointResponse;
    pbkdf2: Pbkdf2EndpointResponse;
    qrcode: CanvasEndpointResponse;
    circle: CanvasEndpointResponse;
    base64: Base64EndpointResponse;
    binary: BinaryEndpointResponse;
    sha256: Sha256EndpointResponse;
    mcuser: MCUserEndpointResponse;
    owoify: OwOIfyEndpointResponse;
    clyde: CanvasEndpointResponse;
    greets: FurryEndpointResponse;
    ascii: AsciiEndpointResponse;
    spray: FurryEndpointResponse;
    angry: FurryEndpointResponse;
    anger: FurryEndpointResponse;
    blush: FurryEndpointResponse;
    paper: FurryEndpointResponse;
    punch: FurryEndpointResponse;
    morse: MorseEndpointResponse;
    ship: CanvasEndpointResponse;
    bite: FurryEndpointResponse;
    boop: FurryEndpointResponse;
    evil: FurryEndpointResponse;
    good: FurryEndpointResponse;
    kiss: FurryEndpointResponse;
    lick: FurryEndpointResponse;
    slap: FurryEndpointResponse;
    mock: MockEndpointResponse;
    joke: JokeEndpointResponse;
    pat: FurryEndpointResponse;
    hug: FurryEndpointResponse;
    cry: FurryEndpointResponse;
    sad: FurryEndpointResponse;
    aes: AesEndpointResponse;
    ast: ASTEndpointResponse;
    "trivia/random": unknown;
    "trivia/medium": unknown;
    "trivia/easy": unknown;
    "trivia/hard": unknown;
    findcolor: unknown;
};
