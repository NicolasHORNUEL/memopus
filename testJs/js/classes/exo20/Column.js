import Card from "./Card.js";
import CoopDom from "../CoopDom.js";
import Modal from "../exo20/Modal.js";

export default class Column extends CoopDom {
    constructor(title, cards, term) {
        super();
        this.title = title; // this.title est le nom de la colonne, à apprendre, je sais un peu, beaucoup, parfaitement
        this.cards = cards;
        this.term = term; // this.term est le nom de la rubrique, les différents termes

        // Appel de la méthode qui va afficher la colonne
        this.domElements = this.render();

        // Appel de la méthode qui va afficher les cartes
        this.renderCards();

        // Gestion des événements
        this.domElements.button.onclick = () => {
            const modal = document.querySelector("#modal");
            modal.innerHTML = '';  
            new Modal(term, title, this); // this l'instance de la colonne
        };
    };         
    renderCards = () => {
        for (const iterator of this.cards) {
            new Card(iterator["question"], iterator["reponse"], this);
        }
    }
    render = () => {
         // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const section = this.createAddDomElt("section", "", document.querySelector("#board"),{"class":"column col-3"});
        const title = this.createAddDomElt("h3", this.title, section);
        const button = this.createAddDomElt("button", "Ajouter une carte", section, {"class":"btn btn-success", "data-toggle":"modal", "data-target":"#myModal",});
        const section_cards = this.createAddDomElt("section", "", section ,{"class":"cards"});

        return {
            //"section": section,
            //"title": title,
            "button": button,
            "section_cards": section_cards
        };
    }
}
