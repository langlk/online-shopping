$(document).ready(function() {
  $("#order-form").submit(function(event) {
    var name = $("input#name").val();
    var email = $("input#email").val();
    var address = $("textarea#address").val();
    var brand = $("input:radio[name=shoe]:checked").val();
    var size = $("select#size").val();
    var color = $("input#color").val();


    $(".name").text(name);
    $(".email").text(email);
    $(".address").text(address);
    $(".brand").text(brand);
    $(".size").text(size);
    $(".color").text(color);
    $("#order-form").slideToggle();
    $(".submitted").slideToggle();
    event.preventDefault();
  });
});
