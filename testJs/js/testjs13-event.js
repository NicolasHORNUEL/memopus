
const h1 = document.querySelector("#event") //= const h1 = document.getElementById("event")

h1.onclick = function(event) {
    console.log("click sur h1");
}

console.log("propriété onclick de h1 ", h1.onclick);
console.log("window ", window);