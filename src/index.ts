import app from "./app";

async function main() {
  const EventEmitter = require("events");
  const emitter = new EventEmitter();
  emitter.setMaxListeners(50);

  app.listen(app.get("port"));
  console.log(`Server on port ${app.get("port")}`);
}

main();
