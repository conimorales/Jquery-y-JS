$(document).ready(function() {
  $("a").click(function() {
    $(this).attr("target", "_blank");
  });
  $("li:eq(0),li:eq(4),li:eq(8),li:eq(12)").prepend(
    "<span class='fab fa-facebook-f'></i></span>"
  );
  $("li:eq(1),li:eq(5),li:eq(9),li:eq(13)").prepend(
    "<span class='fab fa-instagram'></i></span>"
  );
  $("li:eq(2),li:eq(6),li:eq(10),li:eq(14)").prepend(
    "<span class='fab fa-twitter'></i></span>"
  );
  $("li:eq(3),li:eq(7),li:eq(11),li:eq(15)").prepend(
    "<span class='fab fa-snapchat'></i></span>"
  );

  $("h2").css("color", "red");
  $("li:eq(7)").append('<li><a href="#">link 4.a</a></li>');
  $("li:eq(7)").after('<li><a href="#">link 5</a></li>');
});
