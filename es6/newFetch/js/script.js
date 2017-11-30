'use strict';

/*
Attendre le chargement du DOM pour exécuter le code Javascript
*/
document.addEventListener('DOMContentLoaded', function () {

    /*
    Déclaration des variables
    */
    var articleList = document.querySelector('#articleList');
    var apiUrl = 'http://digitalworkshop.fr/wp-json/wp/v2/posts';
    //

    /*
    Requête asynchrone en ES6
    Fonction fetch() plus le système de Promise
    */
    // Créer une fonction pour la requête
    var asyncLoadFunction = function asyncLoadFunction(theApiUrl) {
        // La fonction fetch() prend en paramètre l'adresse de l'API
        fetch(theApiUrl).then(function (data) {
            // Les données sont présentes => renvoyer une Promise de type 'resolve'
            if (data.ok) {
                return Promise.resolve(data);
            }

            // Les données sont présentes => renvoyer une Promise de type 'reject'
            else {
                    return Promise.reject(new Error('Problème dans la requête'));
                }
        })

        // Traiter le réponse
        .then(function (data) {
            return data.json();
        })

        // Manipuler les données de la réponse
        .then(function (data) {
            return appendHtmlTags(data);
        })

        // Capter l'erreur
        .catch(function (err) {
            return console.log(err);
        });
    };
    //


    /*
    Créer ses fonctions pour traiter les données et les afficher
    */
    var appendHtmlTags = function appendHtmlTags(dataFromRequest) {

        // Le paramètre dataFromRequest est un tableau
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = dataFromRequest[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;


                // Créer une article avec le contenu et l'ajouter dans le DOM
                createArticle(item);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    };

    var createArticle = function createArticle(itemFromIteration) {
        if (itemFromIteration.title.rendered != 'test') {
            articleList.innerHTML += '\n                    <article>\n                        <h2>' + itemFromIteration.title.rendered + '</h2>\n                        <div>' + itemFromIteration.excerpt.rendered + '</div>\n                        <p><a href="' + itemFromIteration.link + '" target="_blank">Voir l\'article</a></p>\n                    </article>\n                ';
        }
    };
    //

    /*
    Lancer la requête
    */
    asyncLoadFunction(apiUrl);
    //
}); // Fin de la fonction d'attente de chargement du DOM