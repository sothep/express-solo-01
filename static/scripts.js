

$(document).ready(function(){
  $('body').on('click', '.generator', function(event){
    event.preventDefault();
    $.ajax("/balance").then(function(response){
      $('.results').text(response);
      $('.results').hide();
      $('.results').slideDown();
      //console.log(response);
    });
  });
});
