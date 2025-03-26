import mongoose from "mongoose";
const dbUser = "ericpinheirodev";
const dbPassword = "Atlasthegames";
const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.dktfu.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar");
  });
  connection.on("open", () => {
    console.log("conectado com sucesso");
  });
};
connect();
export default mongoose;
