import CoopDom from "../CoopDom.js";
import Card from "./Card.js";

export default class Modal extends CoopDom {
    constructor(term, column, DOMcolumn) {
        super();
        this.term = term;
        this.column = column;
        this.DOMcolumn = DOMcolumn;

        // Appel de la méthode qui va afficher le formulaire
        this.domElements = this.renderModal(); 

        // gestion des événements
        this.handleEvents();

    }   

    addCard = () => {
        new Card("Question", "Réponse", this.DOMcolumn); // this représente l'instance de la colonne
    }

    handleEvents = () => {
        // gestion de la soumission du formulaire de modification
        this.domElements.button_send.onclick = () => {

            // Récupération des nouvelles valeurs
            const new_question = this.domElements.input_question.value;
            const new_answer = this.domElements.input_answer.value;

            new Card(new_question, new_answer, this.DOMcolumn); // this représente l'instance de la colonne
        }
    }

    renderModal = () => {
         // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const divmodal = this.createAddDomElt("div", "", document.querySelector("#modal"),{"class":"modal fade", "id":"myModal"});
        const divformat = this.createAddDomElt("div", "", divmodal, {"class":"modal-dialog"});
        const divcontent = this.createAddDomElt("div", "", divformat, {"class":"modal-content"});
        const divheader = this.createAddDomElt("div", "", divcontent, {"class":"modal-header"}); 

        const h4 = this.createAddDomElt("h4", this.term + " / " + this.column, divheader, {"class":"modal-title"});
        const buttonheader = this.createAddDomElt("button", "X", divheader,{"type":"button", "class":"close", "data-dismiss":"modal"});

        const divbody = this.createAddDomElt("div", "", divcontent, {"class":"modal-body"});
        const form_edit = this.createAddDomElt("form", "", divbody);
        
        const label_question = this.createAddDomElt("label", "Question", form_edit, {"for":"question"});
        const input_question = this.createAddDomElt("input", "", form_edit, {"type": "texte", "value":"","class":"form-control"});

        const label_answer = this.createAddDomElt("label", "Réponse", form_edit, {"for":"answer"});
        const input_answer = this.createAddDomElt("input", "", form_edit, {"type": "texte", "value":"","class":"form-control"});

        const divfooter = this.createAddDomElt("div", "", divcontent, {"class":"modal-footer"});
        const button_send = this.createAddDomElt("input","",divfooter,{"type": "submit", "value": "Envoyer","class":"btn btn-success","data-toggle":"modal", "data-target":"#myModal"});

        return {
            "input_question": input_question,
            "input_answer": input_answer,
            "button_send": button_send,
            "form_edit" : form_edit,
        };

    }
}
