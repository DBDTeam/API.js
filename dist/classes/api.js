"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.EndpointType = void 0;
var EndpointType;
(function (EndpointType) {
    EndpointType["Canvas"] = "canvas";
    EndpointType["Fun"] = "fun";
    EndpointType["Misc"] = "misc";
    EndpointType["Utils"] = "utils";
    EndpointType["Furry"] = "furry/actions";
})(EndpointType || (exports.EndpointType = EndpointType = {}));
class Endpoint {
    TYPE;
    client;
    constructor(TYPE, client) {
        this.TYPE = TYPE;
        this.client = client;
    }
    get(endpoint, params) {
        return this.client.fetch(`${this.TYPE}/${endpoint}`, params);
    }
}
exports.Endpoint = Endpoint;
// ARCHIVED FOR FUN:
// Pavez: ????????????????????????????????????????????????????????????????????????????????????
// Pavez: BRO?
// Wawi: que
// Pavez: ????!!?!?!?!?!??!?!?!?!?
// Pavez: furry?
// Wawi: no es mi api jajajaja
// Pavez: la tipica
// Wawi: pero si
// export class Furry extends BaseEndpoint {
//   readonly TYPE = EndpointType.Furry;
// }
