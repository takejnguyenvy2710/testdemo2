/*-----------------------------------------------------------------------------------

    Theme Name: Aron
    Theme URI: http://
    Description: The Multi-Purpose Template
    Author: UI-ThemeZ
    Author URI: http://themeforest.net/user/UI-ThemeZ
    Version: 1.0

-----------------------------------------------------------------------------------*/


$(function () {

    "use strict";


    /* ===============================  Navbar Menu  =============================== */

    var wind = $(window);

    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".topnav");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });

    var open = false,
        navDark = $(".topnav.dark"),
        logoChan = $(".topnav.dark .logo img");

    $('.topnav .menu-icon').on('click', function () {
        open = !open;

        $('.hamenu').toggleClass("open");

        if (open) {

            $('.hamenu').animate({ top: 0 });
            $('.topnav .menu-icon .text').addClass('open');
            navDark.addClass("navlit");
            logoChan.attr('src', 'img/logo-light.png');

        } else {

            $('.hamenu').delay(300).animate({ top: "-100%" });
            $('.topnav .menu-icon .text').removeClass('open');
            navDark.removeClass("navlit");
            logoChan.attr('src', 'img/logo-dark.png');
        }
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseenter', function () {
        $(this).css("opacity", "1").siblings().css("opacity", ".5");
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseleave', function () {
        $(".hamenu .menu-links .main-menu > li").css("opacity", "1");
    });


    $('.main-menu > li .dmenu').on('click', function () {
        $(".main-menu").addClass("gosub");
        $(this).parent().parent().find(".sub-menu").addClass("sub-open");
    });

    $('.main-menu .sub-menu li .sub-link.back').on('click', function () {
        $(".main-menu").removeClass("gosub");
        $(".main-menu .sub-menu").removeClass("sub-open");
    });


    /* ===============================  Swiper slider  =============================== */


    var parallaxSlider;
    var parallaxSliderOptions = {
        speed: 1000,
        autoplay: true,
        parallax: true,
        loop: true,
        pagination: {
            el: '.slider .parallax-slider .swiper-pagination',
            clickable: true
        },
        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find('.bg-img')
                        .attr({
                            'data-swiper-parallax': 0.75 * swiper.width
                        });
                }
            },
            resize: function () {
                this.update();
            }
        },

        pagination: {
            el: '.slider .parallax-slider .swiper-pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.slider .parallax-slider .next-ctrl',
            prevEl: '.slider .parallax-slider .prev-ctrl'
        }
    };
    parallaxSlider = new Swiper('.slider .parallax-slider', parallaxSliderOptions);


    var parallaxSliderOptions = {
        speed: 1000,
        mousewheel: true,
        parallax: true,
        loop: true,
        pagination: {
            el: '.slide-full .parallax-slider .swiper-pagination',
            clickable: true
        },
        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find('.bg-img')
                        .attr({
                            'data-swiper-parallax': 0.75 * swiper.width
                        });
                }
            },
            resize: function () {
                this.update();
            }
        },

        pagination: {
            el: '.slide-full .parallax-slider .swiper-pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.slide-full .parallax-slider .next-ctrl',
            prevEl: '.slide-full .parallax-slider .prev-ctrl'
        }
    };
    parallaxSlider = new Swiper('.slide-full .parallax-slider', parallaxSliderOptions);

    var swiperWork = new Swiper('.mcolumn .swiper-container', {
        spaceBetween: 30,
        speed: 1000,
        loop: true,
        centeredSlides: true,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 2
            },
            640: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 4
            }
        },

        navigation: {
            nextEl: '.mcolumn .next-ctrl',
            prevEl: '.mcolumn .prev-ctrl'
        }
    });


    /* ===============================  Mouse Hover  =============================== */

    $('.services-grid .items').on('mouseenter', function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    $('.social .icon').on('click', function () {
        $(this).parent().toggleClass("active");
    });


    /* ===============================  Var Background image  =============================== */

    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    /* ===============================  slick Carousel  =============================== */

    $('.testimonials .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.testimonials .prev',
        nextArrow: '.testimonials .next',
        dots: false,
        autoplay: true,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.testimonials .slider-nav').slick({
        slidesToShow: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        focusOnSelect: true
    });

    $('.team .team-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    /* ===============================  drawsvg icon  =============================== */

    var footer = $("footer").outerHeight();

    $(".space-bottom").css('margin-bottom', footer);


    /* ===============================  YouTubePopUp  =============================== */

    $("a.vid").YouTubePopUp();


    /* ===============================  parallaxie  =============================== */

    $('.parallaxie').parallaxie({
        speed: 0.2,
        size: "cover"
    });


    /* ===============================  blog-grid  =============================== */

    var blgImg = $('.blog-grid .post-img .img').outerHeight() + 120;

    $(".blog-grid .bg-pattern").css("height", blgImg);

});


// === window When Loading === //

$(window).on("load", function () {


    /* ===============================  SPLITTING TEXT  =============================== */

    Splitting();


    /* ===============================  SPLITTING  =============================== */

    var imageUp = document.getElementsByClassName('thumparallax');
    new simpleParallax(imageUp, {
        delay: 5
    });

    /* ===============================  isotope Masonery  =============================== */

    $('.gallery').isotope({
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope();

    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({ filter: filterValue });
    });

    $('.filtering').on('click', 'span', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    /* ===============================  contact validator  =============================== */

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});


/* ===============================  Hide / show navbar  =============================== */

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navi').outerHeight();
$(window).on("scroll", function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        $('#navi').css('top', '-100px');

    } else {

        if (st + $(window).height() < $(document).height()) {
            $('#navi').css('top', '0');
        }
    }

    lastScrollTop = st;
}


/* ===============================  Preloader page  =============================== */

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function () {
    $('#preloader').addClass("isdone");
    $('.loading-text').addClass("isdone");
});


/* ===============================  Wow Animation  =============================== */

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();


/* ===============================  Scroll back to top  =============================== */

$(document).ready(function () {
    "use strict";

    //Scroll back to top

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })


});


$(window).scroll(function () {

    /* ===============================  fade slideshow content  =============================== */

    var scrolled = $(this).scrollTop();
    $('.slider .caption').css({
        'opacity': 1 - scrolled / 600
    });

});

/* ===============================  Mouse effect  =============================== */

function mousecursor() {
    if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
};

$(function () {
    mousecursor();
});

