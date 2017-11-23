/*
Création d'un objet
*/  
    var botBrain = {
        botName: 'Timothy',
        botFeeling: 'neutral',
        isGreeted: false,

        botResponse: function( messageParam ){
            if( 
                messageParam.search('BONJOUR') != -1 ||
                messageParam.search('SALUT') != -1 ||
                messageParam.search('WESH') != -1
            ){
                 // Réponse du Bot
                messagesBox.innerHTML += '<article><p>Salut !</p></article>';
            };

            if(
                messageParam.search('VAS-TU') != -1 ||
                messageParam.search('TU VAS') != -1
            ){
                 // Réponse du Bot
                 messagesBox.innerHTML += '<article><p>Bien et toi ?</p></article>';
            };
        },

        botSentences: {
            botSayHello: [
                'Salut',
                'Hello',
                'Bonjour',
                'Ciao'
            ]
        }
    };
//

console.log(
    Math.floor(Math.random() * ((botBrain.botSentences.botSayHello.length - 1) - 0)) + 0
);





/*
Sélectionner les balises HTML en Javascript
*/
    var chatBox = document.getElementById('chatBox');
    var userMessage = document.getElementById('userMessage');
    var messagesBox = document.getElementById('messagesBox');
//

/*
Capter l'événement 'submit' du formulaire
*/
    chatBox.addEventListener( 'submit', function(evt){
        // Bloquer le comportement par defaut du formulaire
        evt.preventDefault();

        // Récupérer la valeur du input et analyser le nombre de caractères
        if( userMessage.value.length > 0 ){

            // Modifier le contenu HTML de la ballise messageBox
            messagesBox.innerHTML += '<article class="userMessage"><p>'+ userMessage.value + '</p></article>';

            // Mettre la valeur de la variable en majuscule
            var theMessage = userMessage.value.toUpperCase();

            // Appeler la fonction du Bot pour afficher la réponse
            botBrain.botResponse( theMessage );
        };

        // Vider la valeur de l'input
        userMessage.value = '';
        
    });
// 