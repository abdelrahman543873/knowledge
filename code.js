const http = require("http");
const staticHandler = require("serve-handler");
const ws = require("ws");
const Redis = require("ioredis"); // (1)
const redisSub = new Redis({});
const redisPub = new Redis();
// serve static files
const server = http.createServer((req, res) => {
  return staticHandler(req, res, { public: "www" });
});
const wss = new ws.Server({ server });
wss.on("connection", (client) => {
  console.log("Client connected");
  client.on("message", (msg) => {
    console.log(`Message: ${msg}`);
    redisPub.publish("chat_messages", msg); // (2)
  });
});
redisSub.subscribe("chat_messages"); // (3)
redisSub.on("message", (channel, msg) => {
  for (const client of wss.clients) {
    if (client.readyState === ws.OPEN) {
      client.send(msg);
    }
  }
});
server.listen(process.argv[2] || 8080);
