// Esse arquivo define os endpoints da aplicação, ou seja, as rotas que serão acessadas pelo cliente.
import { Router } from "express";
import createLetter  from "../controllers/LetterControllers.js";

const routeLetter = Router();

routeLetter.post("/letters", createLetter);


export default routeLetter;
// Exporta a rota para ser usada no servidor principal