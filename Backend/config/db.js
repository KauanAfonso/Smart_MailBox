//Esse arquivo tem como função conectar e configurar o banco de dados
import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./cartas.db",
  logging: false, // remove logs no terminal
})

module.exports = sequelize;