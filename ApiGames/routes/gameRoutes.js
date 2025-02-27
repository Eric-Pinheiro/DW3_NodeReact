import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

gameRoutes.get("/games", gameController.getAllGames);
export default gameRoutes;
