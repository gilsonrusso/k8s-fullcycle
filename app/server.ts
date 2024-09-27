import cors from "cors";
import express from "express";
import routes from "./routes";

const PORT = process.env.API_SERVER_PORT ?? 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => console.log(`🚀 Server Started on Port ${PORT}`));
