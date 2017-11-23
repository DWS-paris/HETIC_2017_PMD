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

botBrain.botSayHello();