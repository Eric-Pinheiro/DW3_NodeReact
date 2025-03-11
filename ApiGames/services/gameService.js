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
  async create(title, platform, year, price) {
    try {
      const newGame = new Game({
        title,
        platform,
        year,
        price,
      });
      await newGame.save()
    } catch (error) {
      console.log(error);
    }
  }
  async delete(id){
    try{
      await Game.findByIdAndDelete(id)
      console.log(`Game com a id: ${id} foi excluido.`)
    } catch (error){}
    console.log(error)
  }
}
export default new gameService();
