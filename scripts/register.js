function registerUser(event, fields) {
    // Register user function
    $.ajax({   
        async : false,
        type: "POST",
        url: "api/handlers/userHandler.php",
        data:{action: "registerUser", username: fields.username, email: fields.email, password: fields.password},
        success: function(data){ 
            if(data.status == 'error'){
                $( ".emailExists" ).html(data.failMessage);
                event.preventDefault();
            }else {
                alert("Grattis, du har skapat ett konto");
            }
        }
     });
     
}


