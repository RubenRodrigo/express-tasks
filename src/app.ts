import express from "express";
import router from "./routes/main.routes";

const app = express();

// settings
app.set("port", process.env.PORT || 3001);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.send(`The API is at http://localhost:${app.get("port")}`);
});

app.use(router);

export default app;
