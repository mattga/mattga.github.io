//jQuery to collapse the navbar on scroll
$navbar = $(".navbar");
$navhdr = $(".nav-hdr");
var sc_ratio = .7;

$(window).scroll(function() {
    var offset = $navbar.offset().top;
    var win_ht = $(window).height();
    var wrk_ht = $('.work-section').height();
    var abt_ht = $('.about-section').height();
    var con_ht = $('.connect-section').height();

    if (offset > 50) {
        $navbar.addClass("collapse");
        $navhdr.addClass("collapse");
    } else {
        $navbar.removeClass("collapse");
        $navhdr.removeClass("collapse");
    }

    if (offset >= sc_ratio*win_ht && offset < win_ht + sc_ratio*wrk_ht) {
        $navbar.addClass('animate-work').removeClass('animate-about');
    } else if (offset >= win_ht + sc_ratio*wrk_ht && offset < win_ht+wrk_ht + sc_ratio*abt_ht) {
        $navbar.addClass('animate-about').removeClass('animate-work').removeClass('animate-connect');
    } else if (offset >= win_ht+wrk_ht + sc_ratio*abt_ht) {
        $navbar.addClass('animate-connect').removeClass('animate-about');
    } else if (offset < .5*win_ht) {
        $navbar.removeClass('animate-work').removeClass('animate-about');
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeOutExpo');
        event.preventDefault();
    });
});
