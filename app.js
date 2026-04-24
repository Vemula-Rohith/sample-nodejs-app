const express = require("express");

const PORT = 3000;
const BIND_HOST = "127.0.0.1";

function logExit(message) {
  console.error("[FATAL]", message);
  process.exit(1);
}

if (!process.env.DB_HOST) {
  logExit("DB_HOST environment variable is required but was not set.");
}

console.log("[startup] internal port:", PORT);
console.log("[startup] DB_HOST is present: yes (value not logged)");

const app = express();

app.get("/", (req, res) => {
  res.type("text/plain").send("Service is running");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/debug", (req, res) => {
  res.json({
    PORT: String(PORT),
    DB_HOST: process.env.DB_HOST,
  });
});

const server = app.listen(PORT, BIND_HOST, () => {
  console.log(`[startup] server listening on http://localhost:${PORT}`);
});

server.on("error", (err) => {
  logExit(err.message || String(err));
});
