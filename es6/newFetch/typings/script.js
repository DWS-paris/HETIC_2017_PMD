/*
Attendre le chargement du DOM pour exécuter le code Javascript
*/
document.addEventListener(`DOMContentLoaded`, () => {

    /*
    Déclaration des variables
    */
        let articleList = document.querySelector(`#articleList`)
        const apiUrl = `http://digitalworkshop.fr/wp-json/wp/v2/posts`
    //

    /*
    Requête asynchrone en ES6
    Fonction fetch() plus le système de Promise
    */
        // Créer une fonction pour la requête
        const asyncLoadFunction = theApiUrl => {
            // La fonction fetch() prend en paramètre l'adresse de l'API
            fetch(theApiUrl ).then(data => {
                // Les données sont présentes => renvoyer une Promise de type 'resolve'
                if (data.ok) { return Promise.resolve(data) }

                // Les données sont présentes => renvoyer une Promise de type 'reject'
                else { return Promise.reject(new Error('Problème dans la requête')) }
            })

            // Traiter le réponse
            .then( data => data.json() )

            // Manipuler les données de la réponse
            .then(data =>  appendHtmlTags(data) )

            // Capter l'erreur
            .catch((err) =>  console.log(err) );
        }
    //


    /*
    Créer ses fonctions pour traiter les données et les afficher
    */
        const appendHtmlTags = dataFromRequest => {
            
            // Le paramètre dataFromRequest est un tableau
            for( let item of dataFromRequest ){
                
                // Créer une article avec le contenu et l'ajouter dans le DOM
                createArticle(item)
            }
        }

        const createArticle = ( itemFromIteration ) => {
            if(itemFromIteration.title.rendered != `test`){
                articleList.innerHTML += `
                    <article>
                        <h2>${itemFromIteration.title.rendered}</h2>
                        <div>${itemFromIteration.excerpt.rendered}</div>
                        <p><a href="${itemFromIteration.link}" target="_blank">Voir l'article</a></p>
                    </article>
                `
            }
        }
    //

    /*
    Lancer la requête
    */
        asyncLoadFunction(apiUrl)
    //
    
}) // Fin de la fonction d'attente de chargement du DOM