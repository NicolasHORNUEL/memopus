function getToken() {
    return new Promise(function(resolve, reject) {
        if(Math.random() > 0.5) {
            resolve("Xd897087edec");
        }
        else {
            reject("Erreur dans l'obtention du token");
        }
    });
}

function getUser() {
    return new Promise(function(resolve, reject) {
        if(Math.random() > 0.5) {
            resolve({"login":"bob", "uid":"158"});
        }
        else {
            reject("Erreur dans l'obtention des informations concernant l'utilisateur");
        }
    });
}

/* getToken()
    .then(function(token){
        console.log("Cas favorable, token : ", token);
        //chaînage possible car getUser renvoie également une promesse
        return getUser(); 
    })
    .then(function(data){
        console.log("Cas favorable, user : ", data);
    })
    .catch(function(error){
        console.error(error);
    });
 */

 async function getTokenUser() { // async pas bloquant. async prévient que l'on va manipuler des fonctions asynchrone
    try {
        // récupération du token
        const token = await getToken(); // await bloquant
        console.log("token : ", token);
        // récupération des infos de l'utilisateur si la récupération du code s'est bien passé
        const user = await getUser(); // await bloquant
        console.log("user : ", user);
    } catch (error) {
        console.log('Erreur attrapée : ', error)
    }
}

getTokenUser();