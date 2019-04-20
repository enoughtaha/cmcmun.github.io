$("header").load("header.html");
$("#footer").load("footer.html");


vh = $(window).height()/100;
vw = $(window).width()/100;

(function ($) {
  $(document).ready(function(){
    $(function () {
        $(window).scroll(function () {

            if ($(this).scrollTop() > 30) {
                $('header').fadeIn(300);
            } else {
                 $('header').fadeOut(300);
            }
        });
    });

});
  }(jQuery));

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("video").attr("src","media/mobileintro.mp4");

  }

  $('.intro-continue').click(function() {
      $('html,body').animate({
              scrollTop: $('#about').offset().top},
              'slow');
  });

  $('.head-d-mid').click(function() {
    if (document.title == "CMC MUN") {
      $('html,body').animate({
              scrollTop: $('#intro').offset().top},
              'slow');
            } else {
                document.location.href = "index.html";
            }
  });

  $('#home-mun').click(function() {
    if (document.title == "CMC MUN") {
      $('html,body').animate({
              scrollTop: $('.about-mun').offset().top},
              'slow');
            } else {
                document.location.href = "index.html";
            }
  });

  $('#home-us').click(function() {
    if (document.title == "CMC MUN") {

      $('html,body').animate({
              scrollTop: $('.about-us').offset().top},
              'slow');
            } else {
                document.location.href = "index.html";
            }
  });
