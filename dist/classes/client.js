"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBDTeamClient = exports.Languages = exports.BASE_URL = void 0;
const axios_1 = __importDefault(require("axios"));
const node_events_1 = __importDefault(require("node:events"));
exports.BASE_URL = "https://api.dbdteam.xyz/";
var Languages;
(function (Languages) {
    Languages["Spanish"] = "es";
})(Languages || (exports.Languages = Languages = {}));
class DBDTeamClient extends node_events_1.default {
    config;
    api_key;
    constructor(api_key, config) {
        super();
        this.api_key = api_key;
        this.config = config;
        this.on("debug", (message) => console.debug("\x1b[32m", "[DBDTeamAPI] [DEBUG]", "\x1b[0m", message));
        this.on("error", (message) => console.error("\x1b[31m", "[DBDTeamAPI] [ERROR]", "\x1b[0m", message));
    }
    fetch(url, params = {}) {
        // this.checkKeyExists(this.api_key);
        params.headers.key = this.api_key;
        const URL = exports.BASE_URL + url + this.parseParams(params);
        const response = axios_1.default.get(URL, {
            headers: params.headers,
        });
        if (this.config.debug)
            this.emit("debug", `Endpoint accessed: "${URL}"`);
        return response;
    }
    async checkKeyExists(key) {
        try {
            const response = await fetch(exports.BASE_URL + "viewkeyinfo", {
                headers: { key },
            });
            if (!response.ok) {
                throw new Error(`Invalid or missing API Key: ${response.statusText}`);
            }
        }
        catch (error) {
            throw new Error("Error checking API Key: " + error.message);
        }
    }
    parseParams(obj) {
        if (!obj)
            return "";
        const pm = new URLSearchParams(obj);
        return "?" + pm.toString();
    }
}
exports.DBDTeamClient = DBDTeamClient;
