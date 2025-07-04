//Esse arquivo tem como função definir consultas diretas ao banco de dados
import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const LetterModel = sequelize.define("Letter", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pendente"
    },
    timestamp:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW   
    }

}

)

export default LetterModel;