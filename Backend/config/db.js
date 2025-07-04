//Esse arquivo tem como função conectar e configurar o banco de dados
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../cartas.db",
  logging: false, // remove logs no terminal
})

export default sequelize;