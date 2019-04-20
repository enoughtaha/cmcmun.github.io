$("header").load("header.html");
$("#footer").load("footer.html");


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $("video").attr("src","media/mobileintro.mp4");
}


$('.intro-continue').click(function() {
    $('html,body').animate({
            scrollTop: $('#about').offset().top},
            'slow');
});

$('.about-direct').click(function() {
  if (document.title == "CMC MUN") {
    $('html,body').animate({
            scrollTop: $('#about').offset().top},
            'slow');
          } else {
              document.location.href = "index.html";
          }
});
