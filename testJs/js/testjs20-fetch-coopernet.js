
import Coopernet from "./services/Coopernet.js";
import Term from "./classes/exo20/Term.js"
import Board from "./classes/exo20/Board.js";
import Modal from "./classes/exo20/Modal.js"

const coop = new Coopernet("https://www.coopernet.fr");
console.log("coop : ",coop);

let token;
let user;

async function getTokenUser() {
    try {
        token = await coop.getToken();
        user = await coop.getUser("yd", "yd", token);
        const terms = await coop.getTerms(user, token);
        for (let term of terms) {
            // callback : c'est à dire passage de la référence vers la méthode createBoard
            new Term(term, createBoard);
        }
        // on crée une fenêtre modale invisible
        new Modal();        
    }
    catch(error){
        console.error("Erreur attrapée : ", error)
    }
}

async function createBoard(title, id) {
    console.log("Dans createBoard ", title, id);
    try {
        if (token && user) {
            // récupération des colonnes
            const columns = await coop.getCards(user, token, id);
            console.log("colonnes", columns);
            const board = new Board(title, columns);
            console.log("board : ", board);
        }
    }
    catch(error){
        console.error("Erreur attrapée : ", error)
    }
}

getTokenUser();
