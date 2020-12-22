try {
    afficheI(5);
} catch (error) {
    // en cas d'erreur, je peux faire des traitements ici
    console.error("erreur attrapée : ",error)
}

function afficheI(i) { 
    if(typeof(i) != "string") {
        throw new Error("Attention, i doit être une chaîne de caractère");
    }
    console.log(i);
}