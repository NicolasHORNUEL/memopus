import CoopDom from "../CoopDom.js";

export default class Modal extends CoopDom {
    constructor() {
        super();

        // Appel de la méthode qui va afficher le formulaire
        this.domElements = this.renderModal(); 
    }   
    renderModal = () => {
         // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const div1 = this.createAddDomElt("div", "", document.body,{"class":"modal", "id":"modal_container"});
        const div2 = this.createAddDomElt("div", "", div1, {"id":"modal_content"});
        const button1 = this.createAddDomElt("div", "X", div2,{"type":"button", "id":"X_btn"});
        const h1 = this.createAddDomElt("h1", "Coucou je suis une fenêtre modale", div2);
        const form = this.createAddDomElt("form", "", div2);
        const p1 = this.createAddDomElt("p", "", form);
        const label1 = this.createAddDomElt("label", "Text area", p1);
        const textarea1 = this.createAddDomElt("textarea", "Text area", p1,{"name":"textarea", "id":"textarea", "cols":"30", "rows":"10", "resize":"true"});
        const p2 = this.createAddDomElt("p", "", form);
        const label2 = this.createAddDomElt("label", "password", p2, {"for":"password"});
        const input1 = this.createAddDomElt("input", "", p2,{"type":"password", "id":"password"});
        const p3 = this.createAddDomElt("p", "", form);
        const button2 = this.createAddDomElt("button", "Close", p3,{"id":"close_btn"});

    }
}
