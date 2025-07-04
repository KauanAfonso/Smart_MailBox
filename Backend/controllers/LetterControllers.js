// Esse arquivo define Lógica de controle, recebe req/res e chama os models


import LetterModel from "../models/LetterModel.js";

const createLetter = async(req,res) =>{
    const {status} = req.body;

    if(!status || typeof status !== "string"){
        return res.status(400).json({
            message: "Erro de requisição"
        });
    }

    try{
        LetterModel.create({
            status: status
        }).then((letter) => {
            res.status(201).json({
                message: "Carta criada com sucesso",
                letter: letter
            });
        })
    }catch(error){
        res.status(500).json({
            message: "Erro de servidor",
            error: error.message
        })
    }
}

export default createLetter;