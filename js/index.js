$("header").load("header.html");
$("#footer").load("footer.html");
$(".section-divider").load("divider.html");


vh = $(window).height()/100;
vw = $(window).width()/100;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $("video").attr("src","media/mobileintro.mp4");
  $(".nav-buffer").height($("#mobile-nav").height());
} else {
  $(".nav-buffer").height($("#desktop-nav").height());
}

(function ($) {
  $(document).ready(function(){
    if (document.title == "CMC MUN") {
      $(function () {
          $(window).scroll(function () {

              if ($(this).scrollTop() > (30*vh)) {
                  $('header').fadeIn(300);
              } else {
                   $('header').fadeOut(300);
              }
          });
      });
    }


});
  }(jQuery));


$('.team-bio-scroll').click(function() {
    $('html,body').animate({
            scrollTop: $('#team-roster').offset().top},
            'slow');
});

$("#team-leaders").click(function() {
  $('#leaders-icon').toggleClass('flip-icon');
  $('#leaders-content').toggleClass('team-class-extend');
});

$("#team-2022").click(function() {
  $('#2022-icon').toggleClass('flip-icon');
  $('#2022-content').toggleClass('team-class-extend');
});

$("#team-2021").click(function() {
  $('#2021-icon').toggleClass('flip-icon');
  $('#2021-content').toggleClass('team-class-extend');
});

$("#team-2020").click(function() {
  $('#2020-icon').toggleClass('flip-icon');
  $('#2020-content').toggleClass('team-class-extend');
});

$("#team-2019").click(function() {
  $('#2019-icon').toggleClass('flip-icon');
  $('#2019-content').toggleClass('team-class-extend');
});
