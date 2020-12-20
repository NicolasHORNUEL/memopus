//VENDREDI
let euros = document.querySelector("#euros");
let francs = document.querySelector("#francs");
euros.oninput = function(event) {
    francs.value = convert(euros.value, "francs");
}
francs.oninput = function(event) {
    francs = document.querySelector("#francs").value
    if(francs) {
        euros = convert(francs, "euros");
        document.querySelector("#euros").value = euros; 
    }
}
//JEUDI
const form = document.querySelector("form");
form.onsubmit = function(event) {
    event.preventDefault();
/*     let euros = document.querySelector("#euros").value;
    let francs = document.querySelector("#francs").value;
    if(euros) {
        francs = convert(euros, "francs");
        document.querySelector("#francs").value = francs;
    }else{
        euros = convert(francs, "euros");
        document.querySelector("#euros").value = euros; 
    } */
}
function convert(amount, currency) {
  if(currency == "francs") return amount * 1.06;
  else return amount / 1.06;
}
/* const inputs = document.querySelectorAll("input");
for (const iterator of inputs) {
    iterator.onclick = function(event) {
        const id_input = iterator.getAttribute('id'); // = this.getAttribute('id')
        if(id_input == "euros") {
            var input = document.querySelector("#euros");
            input.focus();
            input.setSelectionRange(0, 1);
            document.querySelector("#francs").value = "";
        } else if (id_input == "francs") {
            document.querySelector("#euros").value = "";
        }
    }   
}
 */

