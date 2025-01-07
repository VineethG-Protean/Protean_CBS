import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import ROU from "./routes";

const app: Express = express();
const PORT = 3001;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`⚡ Server is up and running at ${PORT} \n CBS is active at http://localhost:3001/api/cbs`);
});

app.use("/api/cbs", ROU);
