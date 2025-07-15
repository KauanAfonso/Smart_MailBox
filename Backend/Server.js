
//Importar o banco e sua model
import sequelize from "./config/db.js";
import routeLetter from "./routes/LettersRoutes.js";
import express from "express"; // certo
import cors from "cors"; // certo

const app = express();
app.use(cors()); // Habilita o CORS para todas as rotas
app.use(express.json());
app.use("/api", routeLetter);

const port = process.env.PORT || 3000;


app.listen(port, async()=>{
    try {
        await sequelize.authenticate(); // Tenta conectar ao banco de dados
        await sequelize.sync(); // Sincroniza os modelos com o banco de dados
        console.log("Conexão com o banco de dados estabelecida com sucesso.");
        console.log("Modelo Letter sincronizado com o banco de dados.");
    } catch (error) {
        console.error("Erro ao conectar com o banco de dados:", error);
    }
    console.log("Servidor rodando na porta 3000");
})