

const h1 = document.querySelector("#add-p") //= const boutton = document.getElementById("add-p"")

h1.onclick = function(event) {
    console.log("nombre de clic");
    const ps_balise = document.getElementById("paragraphes");

    const p_balise = document.createElement("p");
    p_balise.textContent = "Lorem Ipsum";
    ps_balise.appendChild(p_balise);

}

console.log("window ", window);
console.log("document ", document);
