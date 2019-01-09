

$( document ).ready(function() {
    $("#projects").hide();
    $("#game").hide();
  });

$("#projlink").click(function() {
    $("#projects").show();
    $("#about").hide();
    $("#game").hide();
  })

$("#home").click(function(){
    $("#about").show();
    $("#projects").hide();
    $("#game").hide();
  })

$("#game-link").click(function(){
    $("#about").hide();
    $("#projects").hide();
    $("#game").show();
})

$(".frogicorn").click(function(){
    $(this).slideUp();
})