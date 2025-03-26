import mongoose from "mongoose";
// documento aninhado
const descriptionSchema = new mongoose.Schema({
  genre: String,
  platform: String,
  rating: String,
});
const gameSchema = new mongoose.Schema({
  title: String,
  year: Number,
  price: Number,
  descriptions: [descriptionSchema], //Array de objetos
});

const Game = mongoose.model("Game", gameSchema);
export default Game;
