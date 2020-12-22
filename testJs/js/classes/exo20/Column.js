import Card from "./Card.js";
import CoopDom from "../CoopDom.js";

export default class Column extends CoopDom {
    constructor(title, cards) {
        super();
        this.title = title;
        this.cards = cards; 

        // Appel de la méthode qui va afficher la colonne
        this.domElements = this.render();

        // Appel de la méthode qui va afficher les cartes
        this.renderCards();


        // Gestion des événements
        const modal_container = document.querySelector("#modal_container");

        this.domElements.button.onclick = () => {
            modal_container.style.visibility = "visible";
        }

        const X_btn = document.querySelector("#X_btn");
        const close_btn = document.querySelector("#close_btn");
        X_btn.onclick = function(){
            modal_container.style.visibility = "hidden"
        }
        close_btn.onclick  = function(){
            modal_container.style.visibility = "hidden"
        }
        modal_container.onclick  = function(event){
            console.log(event.target);
            if(event.target === modal_container){
                modal_container.style.visibility = "hidden"
            };
        }


            //this.addCard();
    };         
    addCard = () => {
        console.log("dans Column.js, méthode addCard : ");
        new Card("Question", "Réponse", this); // this représente l'instance de la colonne
    }
    removeCard = (card) => {
        console.log("Dans removeCard");
        card.domElements.article.remove();// supprime l'élément du dom article de la carte
    }
    renderCards = () => {
        for (const iterator of this.cards) {
            new Card(iterator["question"], iterator["reponse"], this);
        }
    }
    render = () => {
         // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const section = this.createAddDomElt("section", "", document.querySelector("#board"),{"class":"column col-3"});
        const title = this.createAddDomElt("h3", this.title, section);
        const button = this.createAddDomElt("button", "Ajouter une carte", section, {"class":"btn btn-success", "data-toggle":"modal", "data-target":"#myModal"});
        const section_cards = this.createAddDomElt("section", "", section ,{"class":"cards"});

        return {
            "section": section,
            "title": title,
            "button": button,
            "section_cards": section_cards
        };
    }
}
