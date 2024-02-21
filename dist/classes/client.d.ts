/// <reference types="node" />
import { AxiosResponse } from "axios";
import EventEmitter from "node:events";
/**
 * The base URL for the API.
 * @type {string}
 */
export declare const BASE_URL: "https://api.dbdteam.xyz/";
/**
 * Enum for language options.
 * @enum {string}
 */
export declare enum Languages {
    Spanish = "es"
}
/**
 * Type for string languages.
 */
type StringLanguages = Languages | "es" | "en";
/**
 * Interface for client configuration.
 * @interface
 * @property {StringLanguages} [language] - The language for the client.
 * @property {boolean} [debug] - The debug mode for the client.
 */
export interface ClientConfig {
    language?: StringLanguages;
    debug?: boolean;
}
/**
 * Class representing a DBDTeam client.
 * @extends EventEmitter
 */
declare class DBDTeamClient extends EventEmitter {
    /**
     * The client configuration.
     * @type {Partial<ClientConfig>}
     */
    config: Partial<ClientConfig>;
    /**
     * The API key for the client.
     * @type {string}
     */
    api_key: string;
    /**
     * Create a DBDTeam client.
     * @param {string} api_key - The DBDTeam API key for the client.
     * @param {Partial<ClientConfig>} config - The configuration for the client.
     */
    constructor(api_key: string, config: Partial<ClientConfig>);
    /**
     * Fetch data from the API.
     * @param {string} url - The URL of the endpoint.
     * @param {Record<string, any>} [params={}] - Additional parameters for the request.
     * @returns {Promise<AxiosResponse>} A promise that resolves to an `AxiosResponse` object.
     *
     * @example
     */
    fetch(url: string, params?: Record<string, any>): Promise<AxiosResponse>;
    /**
     * Parse parameters into a query string.
     * @param {any} obj - The parameters to parse.
     * @returns {string} The parsed query string.
     * @private
     */
    private parseParams;
}
/**
 * Export the DBDTeamClient class.
 */
export { DBDTeamClient };
