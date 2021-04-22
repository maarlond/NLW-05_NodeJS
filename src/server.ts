import express from "express";

import "./database";
import { routes } from "./routes";

const app = express(); // adicionando o servidor

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333!"));