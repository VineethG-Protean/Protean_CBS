import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import ROU from "./routes";

const app: Express = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.listen(3001, () => {
  console.log("Server is up and running at 3001");
});

app.use("/api/cbs", ROU )
