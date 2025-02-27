import express from "express";
import mongoose from "mongoose";
import Games from "./models/Games.js";
const app = express();
import gameRoutes from "./routes/gameRoutes.js";
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", gameRoutes);
mongoose.connect("mongodb://127.0.0.1:27017/api-thegames");

app.get("/", (req, res) => {
  const games = [
    {
      title: "game 1",
      year: "2020",
      platform: "PC",
      price: 20,
    },
    {
      title: "game 2",
      year: "2021",
      platform: "Console",
      price: 30,
    },
  ];
  res.json(games);
});

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API Rodando na em https://localhost:${port}.`);
});
