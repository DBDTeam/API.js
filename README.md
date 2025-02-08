# DBDTeam API Wrapper

[![npm version](https://img.shields.io/npm/v/@dbdteam/api.js.svg)](https://www.npmjs.com/package/@dbdteam/api.js)
[![npm downloads](https://img.shields.io/npm/dm/@dbdteam/api.js.svg)](https://www.npmjs.com/package/@dbdteam/api.js)
[![license](https://img.shields.io/npm/l/@dbdteam/api.js.svg)](https://opensource.org/licenses/MIT)

A robust wrapper designed to seamlessly interact with the [IDCTeam API](https://api.idcteam.xyz/), offering enhanced functionality and comprehensive type support for a smoother development experience.

## Installation

`npm`
```bash
npm install @dbdteam/api.js
```

`pnpm`
```bash
pnpm install @dbdteam/api.js
```

`yarn`
```bash
yarn add @dbdteam/api.js
```

## Usage

```javascript
import { DBDTeamClient, Endpoint, EndpointType } from "@dbdteam/api.js";

const api_key = "your_api_key_here";

const client = new DBDTeamClient(api_key, {
  debug: true,
});

const Canvas = new Endpoint(EndpointType.Canvas, client);
const Fun = new Endpoint(EndpointType.Fun, client);

// Example usage of the 'canvas/clyde' endpoint
const clyde = await Canvas.get("clyde", { text: "Hello World!" });
console.log(clyde.data.url);

// Example usage of the 'fun/joke' endpoint
const joke = await Fun.get("joke");
console.log("Joke: ", joke.data.joke);
```

## Documentation

### `DBDTeamClient(apiKey: string, options?: { debug?: boolean })`

- `apiKey`: Your DBDTeam API key.
- `options`: Optional configuration object.
  - `debug`: Enable debug mode (default is `false`).

### `Endpoint(type: EndpointType, client: DBDTeamClient)`

- `type`: The type of endpoint to create (e.g., `EndpointType.Canvas`).
- `client`: The DBDTeamClient instance.

### `Endpoint.get(path: string, params?: object)`

- `path`: The API endpoint path.
- `params`: Optional parameters to include in the request.

Returns a promise with the API response.

## Example

```javascript
const canvas = new Endpoint(EndpointType.Canvas, client);

// Get a response from the Canvas endpoint
const image = await canvas.get("clyde", { text: "Hello World!" });
console.log(image.data.url);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


*Made by [Chewawi](https://github.com/Chewawi) with <3*
