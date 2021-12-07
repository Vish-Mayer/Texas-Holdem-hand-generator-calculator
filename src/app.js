import path from "path";
import doenv from "dotenv";
import express from "express";
import cors from "cors";
import { TexasHoldem } from "./texasHoldem.js";

doenv.config();

const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(cors());

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
});

app.get("/api/deal-texas-holdem", async (req, res) => {
  let { players = 1 } = req.query;

  if (players < 1) players = 2;

  if (!Number.isInteger(Number(players)))
    return res.status(400).send({ msg: "Incorrect data type" });
  const game = new TexasHoldem(Number(players));
  res.send({ results: game.dealRound() });
});

export default app;
