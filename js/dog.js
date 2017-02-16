$(document).ready(function() {
        $("button#cat").click(function() {
          $("ul#cat").prepend("<li>Meow!</li>");
          $("ul#dog").prepend("<li>Bark!</li>");
            $('li').css('background-color', 'green');
          });



          $("button#dog").click(function() {
            $("ul#cat").prepend("<li>Meow!</li>");
            $("ul#dog").prepend("<li>Bark!</li>");
              $('li').css('background-color', 'green');
            });
            });
            $(document).ready(function() {
                   $("p").click(function() {
                     $("img").show();
                   });
                 });


                 $(document).ready(function() {
                     $("p").click(function() {
                       $("#goth-showing").toggle();
                       $("#goth-hidden").toggle();
                     });
                   });
