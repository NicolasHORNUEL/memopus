import CoopDom from "../CoopDom.js";
export default class Card extends CoopDom {
    constructor(question, answer, column) {
        super();
        this.question = question;
        this.answer = answer;
        this.column = column;
        
        // construction du dom de la carte
        this.domElements = this.render();

        // gestion des événements
        this.handleEvents();
        
    }
    handleEvents = () => {
        this.domElements.article.onclick = () => {
            if(this.domElements.answer.hidden) {
                this.domElements.answer.hidden = false;
            } else {
                this.domElements.answer.hidden = true;
            }         
        }
    }
    render = () => {
        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
                   /**
         * 4 paramètres qui prendront la valeur des arguments passés
         * @param {string} tagname 
         * @param {string} text 
         * @param {DOM Element} parentElt 
         * @param {object} attributes 
         */
        const article = this.createAddDomElt("article","",this.column.domElements.section_cards, {"class":"text-light bg-secondary rounded p-4 mt-2 mb-2"});
        const question = this.createAddDomElt("h4",this.question,article);
        const button_edit = this.createAddDomElt("button","Proposer une réponse",article,{"class":"btn btn-warning mr-2 w-100"});
        const answer = this.createAddDomElt("div",this.answer,article);
        answer.hidden = true;

        return {
            "article": article,
            "question": question,
            "answer": answer,
            "button_edit": button_edit,
        };
    }
}