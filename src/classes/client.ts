import axios, { AxiosResponse } from "axios";
import EventEmitter from "node:events";

/**
 * The base URL for the API.
 * @type {string}
 */
export const BASE_URL = "https://api.idcteam.xyz/" as const;

/**
 * Enum for language options.
 * @enum {string}
 */
export enum Languages {
  Spanish = "es",
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
class DBDTeamClient extends EventEmitter {
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
  constructor(api_key: string, config: Partial<ClientConfig>) {
    super();

    this.api_key = api_key;
    this.config = config;

    this.on("debug", (message) =>
      console.debug("\x1b[32m", "[DBDTeamAPI] [DEBUG]", "\x1b[0m", message)
    );

    this.on("error", (message) =>
      console.error("\x1b[31m", "[DBDTeamAPI] [ERROR]", "\x1b[0m", message)
    );

  }

  /**
   * Fetch data from the API.
   * @param {string} url - The URL of the endpoint.
   * @param {Record<string, any>} [params={}] - Additional parameters for the request.
   * @returns {Promise<AxiosResponse>} A promise that resolves to an `AxiosResponse` object.
   *
   * @example
   */
  public async fetch(
    url: string,
    params: Record<string, any> = {}
  ): Promise<AxiosResponse> {
    const start = Date.now();

    params.headers = params.headers || {};
    params.headers.key = this.api_key;

    const headers = { ...params.headers };

    const URL = BASE_URL + url + this.parseParams(params);
    const response = await axios.get(URL, {
      headers: headers,
    });

    if (this.config.debug)
      this.emit(
        "debug",
        `Endpoint accessed: "${url}" in ${Date.now() - start}ms`
      );

    return response;
  }

  /**
   * Parse parameters into a query string.
   * @param {any} obj - The parameters to parse.
   * @returns {string} The parsed query string.
   * @private
   */
  private parseParams(obj: any) {
    if (!obj) return "";
    delete obj.headers;
    const pm = new URLSearchParams(obj);
    return "?" + pm.toString();
  }
}

/**
 * Export the DBDTeamClient class.
 */
export { DBDTeamClient };

