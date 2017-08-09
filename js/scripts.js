$(document).ready(function() {
  $("#survey").submit(function(event) {
    var name = $("input#name").val();
    var color = $("input#color").val();

    $(".name").text(name);
    $(".submitted").css("color", color);

    $("#survey").slideToggle();
    $(".submitted").slideToggle();
    event.preventDefault();
  });
});
