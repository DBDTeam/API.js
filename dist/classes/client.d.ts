/// <reference types="node" />
import EventEmitter from "node:events";
export declare const BASE_URL: "https://api.dbdteam.xyz/";
export declare enum Languages {
    Spanish = "es"
}
export type StringLanguages = Languages | "es" | "en";
export interface ClientConfig {
    language?: StringLanguages;
    debug?: boolean;
}
declare class DBDTeamClient extends EventEmitter {
    config: Partial<ClientConfig>;
    api_key: string;
    constructor(api_key: string, config: Partial<ClientConfig>);
    fetch(url: string, params?: Record<string, any>): Promise<import("axios").AxiosResponse<any, any>>;
    private checkKeyExists;
    private parseParams;
}
export { DBDTeamClient };
