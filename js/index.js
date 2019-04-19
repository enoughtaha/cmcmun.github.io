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
