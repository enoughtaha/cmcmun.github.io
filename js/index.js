$("header").load("header.html");
$("#footer").load("footer.html");

vh = $(window).height()/100;
vw = $(window).width()/100;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $("video").attr("src","media/mobileintro.mp4");
}

(function ($) {
  $(document).ready(function(){
    $(function () {
        $(window).scroll(function () {

            if ($(this).scrollTop() > (30*vh)) {
                $('header').fadeIn(300);
            } else {
                 $('header').fadeOut(300);
            }
        });
    });

});
  }(jQuery));


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
