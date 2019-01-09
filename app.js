

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

var counter = 15;
$(".frogicorn").click(function(){
    $(this).slideUp(100);
    counter -= 1;
    console.log(counter);
    if (counter === 0) {
        $("#click").text("Good job!")
    }
})