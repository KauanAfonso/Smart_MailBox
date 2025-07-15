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
const showMailbox = async (req, res)=>{
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

// Função para atualizar o status de uma carta
// Essa função recebe o ID da carta e o novo status, verifica se a carta existe e atualiza o status
const updateLetter = async (req, res) =>{
    try{
        const {id} = req.params;
        const {status} = req.body;

        if(!id || !status || typeof status !== "string"){
            return res.status(400).json({
                message: "Erro de requisição"
            });
        }

        const letter = await LetterModel.findByPk(id);
        if(!letter){
            return res.status(404).json({
                message: "Carta não encontrada"
            });
        }

        letter.status = status;
        await letter.save();

        res.status(200).json({
            message: "Carta atualizada com sucesso",
            letter: letter
        });
    }catch(error){
        res.status(500).json({
            message: "Erro de servidor",
            error: error.message
        });
    }
}

const deleteLetter = async (req, res) =>{
    try{
        const {id} = req.params;


        if(!id || isNaN(id)){
            return res.status(400).json({
                message: "Erro de requisição"
            });
        }

        const letter = await LetterModel.findByPk(id);
        if(!letter){
            return res.status(404).json({
                message:"Carta não encontrada"
            })
        }
        letter.destroy();
        res.status(200).json({
            message: "Carta deletada com sucesso"
        });
    }catch(error){
        res.status(500).json({
            message: "Erro de servidor",
            error: error.message
        });
    }
}




export default {createLetter, showMailbox , updateLetter, deleteLetter};