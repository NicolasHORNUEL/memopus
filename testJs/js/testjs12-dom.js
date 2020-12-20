//lecture du DOM
const h1 = document.getElementById("h1");
console.log ("h1 : ", h1);

//Création d'un élément du DOM
const h2 = document.createElement("h2");
console.log ("h2 : ", h2);

//ajouter du texte à un élément du DOM
h2.textContent = "titre de niveau 2"

//ajouter l'élément dans le dom
window.document.body.appendChild(h2)