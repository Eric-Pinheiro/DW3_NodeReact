import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";
// listar
gameRoutes.get("/games", gameController.getAllGames);
// cadastrar
gameRoutes.post("/games", gameController.createGame);
gameRoutes.delete("/games/:id", gameController.deleteGame);
gameRoutes.put("/games/:id", gameController.updateGame);
gameRoutes.get("/games/:id", gameController.getOneGame);
export default gameRoutes;
