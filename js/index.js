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
