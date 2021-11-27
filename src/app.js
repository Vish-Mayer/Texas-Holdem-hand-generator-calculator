import doenv from "dotenv";
import express from "express";
import cors from "cors";

doenv.config();

const app = express();

app.use(express.json());
app.use(cors());

export default app;
