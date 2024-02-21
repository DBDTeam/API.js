"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBDTeamClient = exports.Languages = exports.BASE_URL = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const node_events_1 = tslib_1.__importDefault(require("node:events"));
/**
 * The base URL for the API.
 * @type {string}
 */
exports.BASE_URL = "https://api.dbdteam.xyz/";
/**
 * Enum for language options.
 * @enum {string}
 */
var Languages;
(function (Languages) {
    Languages["Spanish"] = "es";
})(Languages || (exports.Languages = Languages = {}));
/**
 * Class representing a DBDTeam client.
 * @extends EventEmitter
 */
class DBDTeamClient extends node_events_1.default {
    /**
     * The client configuration.
     * @type {Partial<ClientConfig>}
     */
    config;
    /**
     * The API key for the client.
     * @type {string}
     */
    api_key;
    /**
     * Create a DBDTeam client.
     * @param {string} api_key - The DBDTeam API key for the client.
     * @param {Partial<ClientConfig>} config - The configuration for the client.
     */
    constructor(api_key, config) {
        super();
        this.api_key = api_key;
        this.config = config;
        this.on("debug", (message) => console.debug("\x1b[32m", "[DBDTeamAPI] [DEBUG]", "\x1b[0m", message));
        this.on("error", (message) => console.error("\x1b[31m", "[DBDTeamAPI] [ERROR]", "\x1b[0m", message));
    }
    /**
     * Fetch data from the API.
     * @param {string} url - The URL of the endpoint.
     * @param {Record<string, any>} [params={}] - Additional parameters for the request.
     * @returns {Promise<AxiosResponse>} A promise that resolves to an `AxiosResponse` object.
     *
     * @example
     */
    async fetch(url, params = {}) {
        const start = Date.now();
        params.headers = params.headers || {};
        params.headers.key = this.api_key;
        const headers = { ...params.headers };
        const URL = exports.BASE_URL + url + this.parseParams(params);
        const response = await axios_1.default.get(URL, {
            headers: headers,
        });
        if (this.config.debug)
            this.emit("debug", `Endpoint accessed: "${url}" in ${Date.now() - start}ms`);
        return response;
    }
    /**
     * Parse parameters into a query string.
     * @param {any} obj - The parameters to parse.
     * @returns {string} The parsed query string.
     * @private
     */
    parseParams(obj) {
        if (!obj)
            return "";
        delete obj.headers;
        const pm = new URLSearchParams(obj);
        return "?" + pm.toString();
    }
}
exports.DBDTeamClient = DBDTeamClient;
