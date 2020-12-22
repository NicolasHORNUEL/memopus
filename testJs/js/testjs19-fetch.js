function getToken() {
    return fetch("https://www.coopernet.fr/rest/session/token/")
        .then(function(response) {
            if (response.status !== 200) { // si ça c'est mal passé
                throw new Error("Le serveur n'a pas répondu correctement");
            } else return response.text(); // renvoie une promesse
        })
        .then(function(data) { // data correspond au retour du résolve (ici deux lignes au dessus)
            console.log("Token récupéré : ", data);
            return data;
        })
}
async function getTokenUser() {
    try {
        // récupération du token
        const token = await getToken();

        // récupération des données de l'utilisateur
        // const user = await getUser(token);
    }
    catch(error){
        console.log("Erreur attrapée : ", error)
    }
}

getTokenUser();