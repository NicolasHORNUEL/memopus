import Column from "./Column.js"
import CoopDom from "../CoopDom.js";

export default class Board extends CoopDom {
  constructor(title, columns) {
    super();
    this.title = title;
    this.columns = columns;

    // affichage des éléments du DOM
    this.render();
  }
  render = () => {
    // on supprime tous les élements du DOM qui sont dans main
    const main = document.querySelector("#board");
    main.innerHTML = '';
    // titre
    this.createAddDomElt("h2", this.title, main, {"class":"col-12"});
    // création des colonnes en parcourant this.column et en utilisant la classe Column
    for(let col of this.columns) {
      new Column(col.name, col.cartes);
    }

  }
}

