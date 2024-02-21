"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.EndpointType = void 0;
var EndpointType;
(function (EndpointType) {
    EndpointType["Furry"] = "furry/actions";
    EndpointType["Canvas"] = "canvas";
    EndpointType["Utils"] = "utils";
    EndpointType["Misc"] = "misc";
    EndpointType["Fun"] = "fun";
})(EndpointType || (exports.EndpointType = EndpointType = {}));
/**
 * Class representing a Endpoint.
 */
class Endpoint {
    TYPE;
    client;
    /**
     * Creates an instance of endpoint.
     * @param {EndpointType} TYPE - The type of endpoint to create (e.g., `EndpointType.Canvas`)
     * @param {DBDTeamClient} client - The {@link DBDTeamClient} client instance.
     *
     * @constructor
     */
    constructor(TYPE, client) {
        this.TYPE = TYPE;
        this.client = client;
    }
    get(endpoint, params) {
        return this.client.fetch(`${this.TYPE}/${endpoint}`, params);
    }
}
exports.Endpoint = Endpoint;
// * ARCHIVED FOR FUN:
// ! Pavez: ????????????????????????????????????????????????????????????????????????????????????
// ! Pavez: BRO?
// ? Wawi: que
// ! Pavez: ????!!?!?!?!?!??!?!?!?!?
// ! Pavez: furry?
// ? Wawi: no es mi api jajajaja
// ! Pavez: la tipica
// ? Wawi: pero si
// * export class Furry extends BaseEndpoint {
// *   readonly TYPE = EndpointType.Furry;
// * }
