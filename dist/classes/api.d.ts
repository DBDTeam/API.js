import { AxiosResponse } from "axios";
import { DBDTeamClient } from "./client";
export type CanvasEndpointResponse = AxiosResponse<{
    response: number;
    status: number;
    url: string;
}>;
export type FurryEndpoints = "angry" | "anger" | "bite" | "bleep" | "blush" | "boop" | "bye_greets" | "cry" | "credits" | "evil" | "good" | "greets" | "greets_hello" | "greets_particular" | "greets_goodmorning" | "hug" | "kiss" | "lick" | "paper" | "pat" | "punch" | "sad" | "slap" | "snuggle" | "snuggle_box" | "snuggle_onbox" | "snuggle_someone" | "spray" | "sleep_snuggle" | "puppeyes";
export type FurryEndpointResponse = AxiosResponse<{
    response: string;
    status: number;
    time: number;
    ID: string;
}>;
export declare enum EndpointType {
    Canvas = "canvas",
    Fun = "fun",
    Misc = "misc",
    Utils = "utils",
    Furry = "furry/actions"
}
export declare class Endpoint {
    readonly TYPE: EndpointType;
    readonly client: DBDTeamClient;
    constructor(TYPE: EndpointType, client: DBDTeamClient);
    get(endpoint: string, params?: Record<string, unknown>): Promise<AxiosResponse>;
    get(endpoint: "cbanner", params: {
        background: string;
        position?: number;
        text2?: string;
        text: string;
    }): Promise<CanvasEndpointResponse>;
    get(endpoint: "circle", params: {
        background?: string;
        avatar: string;
    }): Promise<CanvasEndpointResponse>;
    get(endpoint: "clyde" | "minecraftdog", params: {
        language?: string;
        text: string;
    }): Promise<CanvasEndpointResponse>;
    get(endpoint: "discord", params: {
        background?: string;
        colorname?: string;
        username: string;
        language?: string;
        avatar: string;
        text: string;
    }): Promise<CanvasEndpointResponse>;
    get(endpoint: "myfriend", params: {
        language?: string;
        image: string;
        text: string;
    }): Promise<CanvasEndpointResponse>;
    get(endpoint: "ship", params: {
        avatar1: string;
        avatar2: string;
        emoji?: string;
    }): Promise<CanvasEndpointResponse>;
    get(endpoint: "triggered", params: {
        avatar: string;
    }): Promise<CanvasEndpointResponse>;
    get(endpoint: "twitter", params: {
        background?: string;
        verified?: boolean;
        language?: string;
        username: string;
        avatar: string;
        text: string;
        name?: string;
    }): Promise<CanvasEndpointResponse>;
    get(endpoint: "welcome", params: {
        border_color?: string;
        background?: string;
        text_color?: string;
        avatar: string;
        text1: string;
        text2?: string;
        text3?: string;
    }): Promise<CanvasEndpointResponse>;
    get(endpoint: "youtubeads", params: {
        description: string;
        background: string;
        language?: string;
        company: string;
        avatar: string;
        title: string;
    }): Promise<CanvasEndpointResponse>;
    get(endpoint: "boostercard", params: {
        avatar: string;
        border_color?: string;
    }): Promise<CanvasEndpointResponse>;
    get(endpoint: "joke"): Promise<AxiosResponse<{
        response: number;
        status: number;
        joke: string;
    }>>;
    get(endpoint: `trivia/${"easy" | "medium" | "hard" | "random"}`): Promise<AxiosResponse>;
    get(endpoint: "wouldyourather"): Promise<AxiosResponse<{
        selected: {
            option1: string;
            option2: string;
        };
        response: number;
        status: number;
    }>>;
    get(endpoint: FurryEndpoints): Promise<FurryEndpointResponse>;
    get(endpoint: "aes" | "ascii", params: {
        text: string;
    }): Promise<AxiosResponse<{
        text: string;
        original: string;
        response: number;
        status: number;
    }>>;
    get(endpoint: "base64", params: {
        text: string;
        option: "decode" | "code";
    }): Promise<AxiosResponse<{
        result: string;
        response: number;
        status: number;
    }>>;
    get(endpoint: "binary" | "morse", params: {
        text: string;
        option: "decode" | "code";
    }): Promise<AxiosResponse<{
        text: string;
        original: string;
        response: number;
        status: number;
    }>>;
    get(endpoint: "discordapi", params: {
        token_bot: string;
        url: string;
        method?: string;
        data?: any;
        version_search?: string;
        headers: {
            Authorization?: string;
            data?: any;
        };
    }): Promise<AxiosResponse<{
        response: number;
        result: Record<string, any>;
        status: number;
    }>>;
    get(endpoint: "discordavatar ", params: {
        headers: {
            authorization: string;
            avatar: string;
        };
    }): Promise<AxiosResponse<{
        result: string;
        status: number;
        response: number;
    }>>;
    get(endpoint: "discordemoji" | "mock" | "owoify" | "reversetext", params: {
        text: string;
    }): Promise<AxiosResponse<{
        text: string;
        original: string;
        status: number;
        response: number;
    }>>;
    get(endpoint: "pbkdf2", params: {
        text: string;
    }): Promise<AxiosResponse<{
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
        response: number;
        status: number;
    }>>;
    get(endpoint: "sha256", params: {
        text: string;
    }): Promise<AxiosResponse<{
        results: {
            base64: string;
            hex: string;
        };
        original: string;
        response: number;
        status: number;
    }>>;
    get(endpoint: "", params: {}): Promise<AxiosResponse>;
    get(endpoint: "", params: {}): Promise<AxiosResponse>;
    get(endpoint: "", params: {}): Promise<AxiosResponse>;
    get(endpoint: "", params: {}): Promise<AxiosResponse>;
}
