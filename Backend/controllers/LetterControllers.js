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

// Função para mostrar todas as cartas na caixa de entrada
// Essa função busca todas as cartas no banco de dados e retorna uma resposta JSON com as cartas
const show_mailbox = async (req, res)=>{
    try{
        const letters = await LetterModel.findAll();
        res.status(200).json({
            message: "Cartas encontradas com sucesso",
            letters: letters
        });
    }catch(error){
        res.status(500).json({
            message: "Erro de servidor",
            error: error.message
        });
    }
}

export default {createLetter, show_mailbox};