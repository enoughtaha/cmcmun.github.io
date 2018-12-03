vh = $(window).height()/100;
vw = $(window).width()/100;

$('#about-drop').hover(function() {
    $('.about-ext').height(22.666*vh);
}, function() {
    $('.about-ext').height(0);
});

$('#involve-drop').hover(function() {
    $('.involved-ext').height((22.666/4)*3*vh);
}, function() {
    $('.involved-ext').height(0);
});

$('#about-mun-ext').click(function() {
        if (document.title == "CMC MUN") {
            $('html,body').animate({
                scrollTop: $('#about').offset().top-(10*vh)},
                'slow');
        } else {
            document.location.href = "index.html#about";
        }
});

$('#about-mun-ext-two').click(function() {
    if (document.title == "CMC MUN") {
        $('html,body').animate({
            scrollTop: $('#cmc-team-header').offset().top-(13*vh)},
            'slow');
    } else {
        document.location.href = "index.html#cmc-team-header";
    }
});

$('#nav-home').click(function() {
    if (document.title == "CMC MUN") {
        $('html,body').animate({
            scrollTop: $('#full-page').offset().top},
            'slow');
    } else {
        document.location.href = "index.html";
    }

});
