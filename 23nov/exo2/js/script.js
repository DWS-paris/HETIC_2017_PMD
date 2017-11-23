// Créer une fonction pour analyser le message de l'utilisateur
function analyzeText( myTextParam ){
    // Transformer le paramètre en majuscule
    var paramUppercase = myTextParam.toUpperCase();
    console.log(paramUppercase);

    // Recherche 'SALUT' dans le paramètre
    console.log( paramUppercase.search('SALUT') );
};

// Demander à l'utilisateur de taper un texte
var userMessage = prompt( 'Tapez votre message' );

// Appeler la fonction en renseignant le paramètre
analyzeText( userMessage );
