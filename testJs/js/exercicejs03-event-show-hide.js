

const h1 = document.querySelector("#h1") //= const boutton = document.getElementById("add-p"")

h1.onclick = function(event) {
    const p_balise = document.getElementById("paragraphe");
    let p_visibility = p_balise.style.visibility;
    if (p_visibility == '') {
        p_balise.style.visibility ='hidden';
    } else if (p_visibility == 'hidden') {
        p_balise.style.visibility = 'visible';
    } else if (p_visibility == 'visible') {
        p_balise.style.visibility ='hidden';
    }
    console.log("balise.style.visibility : ", p_balise.style.visibility)

}




