/*
Création d'un objet
*/  
    var botBrain = {
        botName: 'Timothy',
        botFeeling: 'neutral',
        isGreeted: false,
        

        botRandomResponse: function(sentencesArray){
            var sentenceIndex =  Math.floor(Math.random() * (sentencesArray.length - 0));
            return sentencesArray[sentenceIndex];
        },

        botResponse: function( messageParam ){
            // Salutation
            if( 
                messageParam.search('BONJOUR') != -1 ||
                messageParam.search('SALUT') != -1 ||
                messageParam.search('WESH') != -1
            ){
                // Modifier la valeur de isGreeted
                this.isGreeted = true;

                // Réponse du Bot
                messagesBox.innerHTML += '<article><p>'+ 
                
                this.botRandomResponse(this.botSentences.botSayHello)

                +'</p></article>';
            };

            // Q? = comment ça va ?
            if(
                messageParam.search('VAS-TU') != -1 ||
                messageParam.search('TU VAS') != -1 
                &&
                this.isGreeted == true
            ){
                // Réponse du Bot
                messagesBox.innerHTML += '<article><p>'+ 
                
                this.botRandomResponse(this.botSentences.botSayHow)

                +'</p></article>';
            };
        },

        botSentences: {
            botSayHello: [
                'Salut',
                'Hello',
                'Bonjour',
                'Ciao'
            ],

            botSayHow: [
                'Je vais bien',
                'Je suis un bot, alors je ne sais pas...',
                'True'
            ]
        }
    };
//

botBrain.botRandomResponse( botBrain.botSentences.botSayHello );






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