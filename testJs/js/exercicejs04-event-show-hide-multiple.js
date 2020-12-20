

const h1s = document.querySelectorAll("h1")

for (i of h1s) {

    console.log("i: ", i)
    let balise_suivante = i.nextElementSibling;
    console.log("balise_suivante : ", balise_suivante )
    i.onclick = function(event) {
        console.log("event : ", event)
        let p_visibility = balise_suivante.style.visibility;
        console.log("p_visibility : ", p_visibility)
        if (p_visibility == '') {
            balise_suivante.style.visibility ='hidden';
        } else if (p_visibility == 'hidden') {
            balise_suivante.style.visibility = 'visible';
        } else if (p_visibility == 'visible') {
            balise_suivante.style.visibility ='hidden';
        }
    }

}

/* if(!visibility || visibility == "visible") p.style.visibility = "hidden";
else p.style.visibility = "visible"; */


