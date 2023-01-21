$(function() {
  $(".carousel").carousel( { interval: 2000, pause: "false" } );
  $("#carouselButton").click(function(){
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
    } else {
        $(".carousel").carousel("cycle");
        $("#carouselButton").children("i").removeClass("fa-play");
        $("#carouselButton").children("i").addClass("fa-pause");
    }
  });
});

$(function() {
            $("#loginButton").click(function(){
              $('#loginModal').modal('toggle');
            });
});

$(function() {
  $("#reserveButton").click(function(){
    $('#loginModal').modal('toggle');
  });
});


// $(function() {
//   $(".modal fade").modal( { interval: 2000 } );
//   $("#carouselPause").click(function(){
//       $(".carousel").carousel("pause");
//   });
//   $("#carouselPlay").click(function(){
//       $(".carousel").carousel("cycle");
//   });
// });

// $('#loginModal').modal(options)