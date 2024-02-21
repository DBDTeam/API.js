import { DBDTeamClient, Endpoint, EndpointType } from "./dist";

const api_key =
  "...";

const client = new DBDTeamClient(api_key, {
  debug: true,
});

void (async function Main() {
  const canvas = new Endpoint(EndpointType.Canvas, client);
  const utils = new Endpoint(EndpointType.Utils, client);
  const fun = new Endpoint(EndpointType.Fun, client);

  console.log((await canvas.get("clyde", { text: "Hail Grasa >:v" })).data);

  console.log(
    (await utils.get("translate", { text: "Hola mundo!", to: "es" })).data
      .result.translation
  );

  console.log("Joke: " + (await fun.get("joke")).data);
})();

// ! BULLSHIT ! ~ Pavéz
// new Canvas(client)
//   .get("clyde", {
//     text: "Hello World!",
//   })
//   .then((data) => console.log(data.data))
//   .catch(console.error);

// new Fun(client)
//   .get("joke")
//   .then((data) => console.log("Joke: ", data.joke))
//   .catch(console.error);

