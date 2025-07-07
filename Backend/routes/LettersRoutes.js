// Esse arquivo define os endpoints da aplicação, ou seja, as rotas que serão acessadas pelo cliente.
import { Router } from "express";
import letterController from '../controllers/LetterControllers.js'; // IMPORTAÇÃO DEFAULT

const routeLetter = Router();

//importando o controller de cartas
// Esse arquivo define os endpoints da aplicação, ou seja, as rotas que serão acessadas pelo cliente.
routeLetter.post("/letters", letterController.createLetter);
routeLetter.get("/letters", letterController.show_mailbox);
routeLetter.put("/letters/:id", letterController.updateLetter);
routeLetter.delete("/letters/:id", letterController.deleteLetter);


export default routeLetter;
// Exporta a rota para ser usada no servidor principal