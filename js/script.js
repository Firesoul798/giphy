// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var userInput = $("input").val();
  var random = Math.floor((Math.random()*28));
  $.ajax({
  url: " https://api.giphy.com/v1/gifs/search?q="+userInput+"&rating=pg&api_key=dc6zaTOxFJmzC",
  method: "GET",
  success: function(response) {
  $(".gallery").html("<center>"+"<img src="+response.data[random].images.fixed_width.url+">"+"</center>"); 
    
    console.log(response);
  },
});

  
  
});

