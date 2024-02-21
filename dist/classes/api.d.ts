import { AxiosResponse } from "axios";
import { EndpointParams } from "../types/parameters";
import { EndpointResponses } from "../types/responses";
import { DBDTeamClient } from "./client";
export declare enum EndpointType {
    Furry = "furry/actions",
    Canvas = "canvas",
    Utils = "utils",
    Misc = "misc",
    Fun = "fun"
}
export type EndpointsWithoutParams = Exclude<keyof EndpointResponses, keyof EndpointParams>;
/**
 * Class representing a Endpoint.
 */
export declare class Endpoint {
    readonly TYPE: EndpointType;
    readonly client: DBDTeamClient;
    /**
     * Creates an instance of endpoint.
     * @param {EndpointType} TYPE - The type of endpoint to create (e.g., `EndpointType.Canvas`)
     * @param {DBDTeamClient} client - The {@link DBDTeamClient} client instance.
     *
     * @constructor
     */
    constructor(TYPE: EndpointType, client: DBDTeamClient);
    /**
     * Get the response of the endpoint without parameters.
     * @template T - The type of endpoint. Must be a value from {@link EndpointsWithoutParams}.
     * @param {T} endpoint - The endpoint to call.
     * @returns {Promise<AxiosResponse<EndpointResponses[T]>>} A promise that resolves with the response when the request is complete.
     * @example
     * // Usage example:
     * // Get the response of an endpoint without parameters.
     * new Endpoint(EndpointType.Fun, client)
     *   .get("joke");
     */
    get<T extends EndpointsWithoutParams>(endpoint: T): Promise<AxiosResponse<EndpointResponses[T]>>;
    get<T extends EndpointsWithoutParams>(endpoint: T): Promise<AxiosResponse<EndpointResponses[T]>>;
    /**
     * Get the response of the endpoint with the given parameters.
     * @template T - The type of endpoint. Must be a value from {@link Endpoints}.
     * @param {T} endpoint - The endpoint to call.
     * @param {EndpointParams[T]} [params] - Parameters for the endpoint. Type is determined by `endpoint`.
     * @returns {Promise<AxiosResponse<EndpointResponses[T]>>} A promise that resolves with the response when the request is complete.
     * @example
     * // Usage example:
     * // Get the base64 encoded string of "Hello World".
     * new Endpoint(EndpointTypes.Fun, client)
     *   .get("base64", { text: "Hello World" });
     */
    get<T extends keyof EndpointParams>(endpoint: T, params: EndpointParams[T]): Promise<AxiosResponse<EndpointResponses[T]>>;
}
