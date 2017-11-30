// Requête AJAX
$.ajax({
    url: './data/data.json',
    type: 'GET',    
    dataType: 'JSON',

    success: function(data){
        for( var i = 0; i < data.length; i++){
            console.log(data[i].fields.adresse)
            $('#mainContent').append('<p>' + data[i].fields.adresse + '</p>')
        }
    },

    error: function(err){
        console.log(err)
    }
})