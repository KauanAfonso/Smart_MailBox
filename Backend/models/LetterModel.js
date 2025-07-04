//Esse arquivo tem como função definir consultas diretas ao banco de dados
import {sequelize} from "../config/db";
import { DataTypes } from "sequelize";

const LetterModel = sequelize.define("Letter", {
    id:{
        type: DataTypes.INTEGER,
        priaryKey:true,
        autoIncrement: true
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pendente"
    },
    timestamp:{
        
    }

}

)