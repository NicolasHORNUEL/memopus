
/**
 * 
 * @param {string} nature 
 * @param {string} texte 
 * @param {DOM element} parent //
 * @param {object} attribute 
 */
function exercicejs01(nature, texte, parent, attribute) {
    
    const balise = document.createElement(nature);

    balise.textContent = texte

    const body = document.getElementById(parent);

    window.document.body.appendChild(balise) //=document.body.appenChild(balise)

    for (const key in attribute) {
        if (Object.hasOwnProperty.call(attribute, key)) {
            const element = attribute[key];
            balise.setAttribute(key,element);
        }
    }

};

exercicejs01("section", "voici la nouvelle balise", "body", {"id":"section_id", "class":"bg-secondary"});
exercicejs01("div", "voici la div", "body", {"id":"section_id", "class":"bg-secondary"});
