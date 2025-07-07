// Esse arquivo define os endpoints da aplicação, ou seja, as rotas que serão acessadas pelo cliente.
import { Router } from "express";
import letterController from '../controllers/LetterControllers.js'; // IMPORTAÇÃO DEFAULT

const routeLetter = Router();

routeLetter.post("/letters", letterController.createLetter);
routeLetter.get("/letters", letterController.show_mailbox);


export default routeLetter;
// Exporta a rota para ser usada no servidor principal