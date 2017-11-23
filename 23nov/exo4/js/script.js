/*
Création d'un objet
*/  
    var botBrain = {
        botName: 'Timothy',
        botFeeling: 'neutral',
        isGreeted: false,

        botSayHello: function(){
            console.log('Bonjour, je suis ' + this.botName);
        }
    };
//

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
            console.log(userMessage.value);

            // Modifier le contenu HTML de la ballise messageBox
            messagesBox.innerHTML += '<article class="userMessage"><p>'+ userMessage.value + '</p></article>';

            // Réponse du Bot
            messagesBox.innerHTML += '<article><p>Salut !</p></article>';


        };

        // Vider la valeur de l'input
        userMessage.value = '';
        
    });
// 