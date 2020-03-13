const express = require("express");
const helmet = require("helmet");
const showsRouter = require("./data/routes/showRoute");
const charactersRouter = require("./data/routes/characterRoute");

const server = express();
server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

//Routes
server.use("/api/shows", showsRouter);

server.use("/api/characters", charactersRouter);

module.exports = server;
