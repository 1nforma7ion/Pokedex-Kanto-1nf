
$(document).ready(function() {
    $("#getBtn").click(function() {
      var pokemonId = $("#pokemonId").val();
      $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + pokemonId,
        type: "GET",
        dataType: "json",
        success: function(response) {
          $("#pokemonName").html(response.name);
          $("#pokemonImg").attr("src", response.sprites.front_default);
          $("#pokemonType").html(response.types[0].type.name);
          $("#pokemonHeight").html(response.height);
          $("#pokemonWeight").html(response.weight);
        }
      });
    });
  });