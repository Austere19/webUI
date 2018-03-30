$(document).ready(function() {
    var windowSize = $(window).width();
    $('.headerLinks li').hover(function() {
        $(this).toggleClass('active');
    });

    if ($('.axisASAP').length) {
        sliderIntegration();
        if (windowSize >= 767) {
            exclusiveFeatures();
        } else {}
        AOS.init({
            disable: 'mobile'
        });
    }
    mobileMenu();
    floatinLink();
    imgLink();
    termsNcondition();
});

function exclusiveFeatures() {
    var i = 0;
    var tid = setInterval(mycode, 1000);

    function mycode() {
        if (i != 4) {
            $(".featuresTilte li").eq(i).addClass('activeC').siblings().removeClass('activeC');
            $(".featuresImage li").eq(i).addClass('activeC').siblings().removeClass('activeC');
            i++;
        } else {
            i = 0;
        }
    }
}

function sliderIntegration() {
    $('#offers').owlCarousel({
        loop:true,
        margin: 10,
        nav: true,
        slideBy: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout:3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('#banners').owlCarousel({
        autoplay: true,
        nav: false,
        slideBy: 1,
        dot: true,
        loop:true,
        autoplayTimeout:4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
}

function floatinLink() {
    $(".floatingLink").hide();
    if ($('.axisASAP').length) {
        var asapLink = $(".asapAccount").offset().top + $('.floatingLink').height();

        $(window).scroll(function() {
            if ($(this).scrollTop() > asapLink) {
                $('.floatingLink').show();
            } else {
                $('.floatingLink').hide();
            }
        });
    }
    $('.floatingLink').hover(function() {
        $(this).addClass('floatActive');
    }, function() {
        $(this).removeClass('floatActive');
    });
}

$(window).load(function() {
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    var headerHeight = $('header').outerHeight(true);
    var footerHeight = $('footer').outerHeight(true);
    var headerFooter = headerHeight + footerHeight;
    var mainHeight = docHeight - headerFooter;
    if (docHeight <= winHeight) {
        $('.mainSection').css('min-height', mainHeight + headerHeight);
    }
});

function mobileMenu() {
    var windowSize = $(window).width();
    var windowHeight = $(window).height();
    if (windowSize < 768) {
        $(".nav-icon2").click(function() {
            $(this).toggleClass('open');
            $(".overlay").toggle();
            $(".headerLinks").slideToggle('fast');
            $(".headerLinks").css("height", windowHeight - $("header h1").height())
        })
        $(".headerLinks").hide();
    }
}

function imgLink() {
    $(".offerBox > img.imgclick").css('cursor', 'pointer');
    $(".offerBox > img.imgclick").click(function() {
        var offerLink = $(this).attr("data-src");
        /* var url = window.location.href; */
        window.open('terms_conditions.html?offerName=' + offerLink);
    });
}

function termsNcondition() {
    var url = window.location.href;
    var offerName = getUrlVars()["offerName"];
    $('.panel').each(function() {
        if ($(this).find('.panel-heading').find('a').hasClass(offerName)) {
            $(this).find('.panel-heading').next().addClass('in');
            $('body, html').animate({
                scrollTop: $(this).prev().offset().top
            }, 500);
        } else {}
    });
}

function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
/*function get_hostname(url) {
    var m = url.match(/^http:\/\/[^/]+/);
    return m ? m[0] : null;
}*/
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var windowSize = $(window).width();
    if (windowSize > 767) {
        if (scroll >= 100) {
            if (!$("header").hasClass("floatinHeader")) {
                $('header').addClass('floatinHeader');
                $('.logo img').attr('src', 'assets/images/axisASAP-smlogo.png')
                $(".smallLogo").show("fadeIn");
            }
        } else {
            $('.logo img').attr('src', 'assets/images/axisASAP-logo.png')
            $(".largeLogo").show("fadeIn");
            $('header').removeClass('floatinHeader');
        }
    } else {}

});