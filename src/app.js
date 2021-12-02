import doenv from "dotenv";
import express from "express";
import cors from "cors";
import { TexasHoldem } from "./texasHoldem.js";

doenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.post("/new-texas-holdem", async (req, res) => {
  const game = new TexasHoldem(req.body.players);
  res.send({ results: game.dealRound() });
});

export default app;
