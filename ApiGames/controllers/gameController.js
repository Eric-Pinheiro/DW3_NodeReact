import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";
// listar
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};
// cadastrar
const createGame = async (req, res) => {
  try {
    const { title, platform, year, price } = req.body;
    await gameService.create(title, platform, year, price);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.delete(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
export default { getAllGames, createGame, deleteGame };
