import CoopDom from "../CoopDom.js";

export default class Term extends CoopDom {
    constructor(term, createBoard) {
        super();
        this.id = term.id;
        this.name = term.name;

        this.domButton = this.render();
        this.domButton.onclick = () => {
            createBoard(this.name, this.id)
        }
    }

    render = () => {
        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const button = this.createAddDomElt("button", this.name, document.getElementById("main"), {"class":"btn btn-secondary m-2"});
        return button;
    }
}



