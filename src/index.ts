// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { router } from './routes/programmingLanguages'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    res.send("Demo Express + TypeScript Server");
});

app.use("/programming-languages", router);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});