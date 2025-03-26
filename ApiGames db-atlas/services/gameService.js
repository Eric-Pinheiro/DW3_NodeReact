import Game from "../models/Games.js";
// listar
class gameService {
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }
  // cadastrar
  async create(title, year, price, descriptions) {
    try {
      const newGame = new Game({
        title,
        year,
        price,
        descriptions,
      });
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }
  async delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi excluido.`);
    } catch (error) {}
    console.log(error);
  }
  async update(id, title, platform, year, price) {
    try {
      await Game.findByIdAndUpdate(id, { title, year, price, descriptions });
      console.log("Alterado com sucesso");
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id) {
    try {
      const game = await Game.findOne({ _id: id });
      return game;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new gameService();
