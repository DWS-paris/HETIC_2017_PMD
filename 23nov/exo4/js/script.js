/*
Création de l'objet Bot
*/  
    var botBrain = {
        isGreeted: false,

        // Liste des réponses possibles
        sentences: {
            isNotGreeted: [
                'Je crois que quelqu\'un me parle...',
                'Ce qui est dit sur <a href="http://desencyclopedie.wikia.com/wiki/Guide_des_bonnes_mani%C3%A8res" target="_blank">ce site</a> est passionnant !',
                '"La vraie humanité consiste à dire bonjour à un sourd.", <em>Remy Donnadieu</em>',
                'Il manque un petit quelque chose pour débuter une conversation...'
            ],
            
            sayHello: [
                'Salut !',
                'Hello!',
                'Bonjour !',
                'Ciao!'
            ],

            sayGoodbye: [
                'A bientôt !',
                'Aurevoir',
                'A la prochaine.',
                'Salut'
            ],

            sayHow: [
                'Très bien, mon programme s\'exécute à merveille !',
                'Oui, oui, très bien, pour le moment mon code fonctionne correctement.',
                'Tout va bien, sinon c\'est qu\'il y à un bug dans mon programmme !!',
                'Tant que j\'ai de l\'electricité dans mes circruits tout va bien !'
            ],

            doNotUnderstand: [
                'Je n\'ai pas compris, je ne comprend pas grand chose en fait...',
                'Je ne sais pas quoi répondre, il va me falloire du temps pour conquérir le monde...',
                'Désolé, je ne comprend pas cette phrase, mes fonctions sont limitées',
                'Un jour je comprendrais peut-être mais là, c\'est le flou total...'
            ]
        },
        
        // Méthode pour définir une réponse aléatoire
        botRandomResponse: function(sentencesArray){
            var sentenceIndex =  Math.floor(Math.random() * (sentencesArray.length));
            return sentencesArray[sentenceIndex];
        },

        // Méthode pour analyser les messages de l'utilisateur
        botResponse: function( messageParam ){
            // Vérifier si le Bot à été salué
            switch(this.isGreeted){
                case false:
                    // Hello Bot!
                    if( 
                        messageParam.search('BONJOUR') != -1 ||
                        messageParam.search('SALUT') != -1 ||
                        messageParam.search('WESH') != -1 ||
                        messageParam.search('HELLO') != -1 ||
                        messageParam.search('COUCOU') != -1 ||
                        messageParam.search('YO') != -1
                    ){
                        // Modifier la valeur de isGreeted
                        this.isGreeted = true;

                        // Le Bot di bonjour
                        messagesBox.innerHTML += '' +
                        '<article><p>' + 
                            this.botRandomResponse(this.sentences.sayHello) +
                        '</p></article>';

                    } else {
                        // Le Bot attend d'être salué
                        messagesBox.innerHTML += ''+
                        '<article><p>'+ 
                            this.botRandomResponse(this.sentences.isNotGreeted) +
                        '</p></article>';
                    }
                break;

                default:
                    if( 
                        // How are you Bot?
                        messageParam.search('VAS-TU') != -1 || 
                        messageParam.search('TU VAS') != -1 ||
                        messageParam.search('ALLEZ VOUS') != -1 ||
                        messageParam.search('CA VA') != -1 ||
                        messageParam.search('LA FORME') != -1 ||
                        messageParam.search('LA PATATE') != -1 
                    ) {
                        // Le Bot dit comment il va
                        messagesBox.innerHTML += ''+
                        '<article><p>'+ 
                            this.botRandomResponse(this.sentences.sayHow) +
                        '</p></article>';

                    } else if(
                        // Goodbye Bot!
                        messageParam.search('SALUT') != -1 ||
                        messageParam.search('AUREVOIR') != -1 ||
                        messageParam.search('AU REVOIR') != -1 ||
                        messageParam.search('BYE') != -1 ||
                        messageParam.search('A+') != -1 ||
                        messageParam.search('CIAO') != -1
                    ){
                        // Modifier la valeur de isGreeted
                        this.isGreeted = false;

                        // Le Bot dit aurevoir
                        messagesBox.innerHTML += ''+
                        '<article><p>'+ 
                            this.botRandomResponse(this.sentences.sayGoodbye) +
                        '</p></article>';

                    } else{
                        // Le Bot n'a pas compris
                        messagesBox.innerHTML += ''+
                        '<article><p>'+ 
                            this.botRandomResponse(this.sentences.doNotUnderstand) +
                        '</p></article>';
                    }
                break;
            };
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