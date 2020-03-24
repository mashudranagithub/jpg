$(document).ready(function(){
    //Home page viewport background slider codes Start
    var mySwiper = new Swiper ('.swiper-container.main-slider', {
        // Optional parameters
        // direction: 'vertical',
        direction: 'horizontal',
        loop: true,
        // autoplay: false,
        autoplay: {
            autoplay:true,
            delay: 15000,
        },
        speed: 3000,
        // effect: 'cube',
        // cubeEffect: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 0,
        //     shadowScale: 1,
        // },
        // effect: 'coverflow',
        // coverflowEffect: {
        //     rotate: 30,
        //     slideShadows: false,
        // },
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        // effect: 'flip',
        // flipEffect: {
        //     rotate: 0,
        //     slideShadows: true,
        // },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    $(".swiper-container").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });
    // Home page viewport background slider codes End




    // Update News Start Here
    var interval;
    function startTicker(){
        $('.update_news li:first').slideUp(function(){
            $(this).appendTo($('.update_news')).slideDown();
        });
    }
    function stopTicker(){clearInterval(interval);}
    interval = setInterval(startTicker, 3000);
    $('#Update').hover(function(){
        stopTicker();
    },function(){
        interval = setInterval(startTicker, 3000);
    });
    // Update News End Here



    //Code for sticky menu Start Here
    var x = $('.header-main').offset().top; 
    
    $(window).scroll(function(){
        var y = $(window).scrollTop();
        if(y>x){
            $('.header-main').addClass('sticky');
           }else{
            $('.header-main').removeClass('sticky');
           }
    });
    $('.header-main').wrapAll('<div class="cover">');
    $('.cover').css('min-height', $('.header-main').outerHeight());
    $('.cover').css('height', 'auto');

$('button.navbar-toggler').click(function(){
    $('.header-main').css({
        "min-height": "auto",    
        "max-height": "100vh",    
    })
});


    //Code for sticky menu End Here


    // $('.search-bar').css('display', 'none');
    $('.search-icon').click(function(){
        $('.search-bar').toggle(300);
        $(this).children('svg').removeClass('fa-search');
    });





        if ($(window).width() > 767) {
            // Research Section mouse hover functionality Start Here
            $('#cgsrhr-tab').hover(function(){
                $(this).addClass('active');
                $(this).parent().siblings().children().removeClass('active');
                $('#cgsrhr').addClass('active');
                $('#cgsrhr').siblings().removeClass('active');
                $(this).children('img').attr("src", "vendor/images/research/color_logos/1. CGSRHR color.png");
                $('#uhc-tab').children('img').attr("src", "vendor/images/research/white_logos/2. CoEHSUHC white.png");
                $('#cueh-tab').children('img').attr("src", "vendor/images/research/white_logos/3. CUEH white.png");
                $('#sisu-tab').children('img').attr("src", "vendor/images/research/white_logos/4. CoESISU white.png");
                $('#cncdn-tab').children('img').attr("src", "vendor/images/research/white_logos/5. CNCDN white.png");

                $('#Research').removeClass('research-bg');
                $('#Research').removeClass('uhc-bg');
                $('#Research').removeClass('cueh-bg');
                $('#Research').removeClass('sisu-bg');
                $('#Research').removeClass('cncdn-bg');
                $('#Research').addClass('cgsrhr-bg');

            });
            $('#uhc-tab').hover(function(){
                $(this).addClass('active');
                $(this).parent().siblings().children().removeClass('active');
                $('#uhc').addClass('active');
                $('#uhc').siblings().removeClass('active');
                $(this).children('img').attr("src", "vendor/images/research/color_logos/2. CoEHSUHC color.png");
                $('#cgsrhr-tab').children('img').attr("src", "vendor/images/research/white_logos/1. CGSRHR white.png");
                $('#cueh-tab').children('img').attr("src", "vendor/images/research/white_logos/3. CUEH white.png");
                $('#sisu-tab').children('img').attr("src", "vendor/images/research/white_logos/4. CoESISU white.png");
                $('#cncdn-tab').children('img').attr("src", "vendor/images/research/white_logos/5. CNCDN white.png");

                $('#Research').removeClass('research-bg');
                $('#Research').removeClass('cgsrhr-bg');
                $('#Research').removeClass('cueh-bg');
                $('#Research').removeClass('sisu-bg');
                $('#Research').removeClass('cncdn-bg');
                $('#Research').addClass('uhc-bg');
            });
            $('#cueh-tab').hover(function(){
                $(this).addClass('active');
                $(this).parent().siblings().children().removeClass('active');
                $('#cueh').addClass('active');
                $('#cueh').siblings().removeClass('active');
                $(this).children('img').attr("src", "vendor/images/research/color_logos/3. CUEH color.png");
                $('#cgsrhr-tab').children('img').attr("src", "vendor/images/research/white_logos/1. CGSRHR white.png");
                $('#uhc-tab').children('img').attr("src", "vendor/images/research/white_logos/2. CoEHSUHC white.png");
                $('#sisu-tab').children('img').attr("src", "vendor/images/research/white_logos/4. CoESISU white.png");
                $('#cncdn-tab').children('img').attr("src", "vendor/images/research/white_logos/5. CNCDN white.png");

                $('#Research').removeClass('research-bg');
                $('#Research').removeClass('uhc-bg');
                $('#Research').removeClass('cgsrhr-bg');
                $('#Research').removeClass('sisu-bg');
                $('#Research').removeClass('cncdn-bg');
                $('#Research').addClass('cueh-bg');
            });
            $('#sisu-tab').hover(function(){
                $(this).addClass('active');
                $(this).parent().siblings().children().removeClass('active');
                $('#sisu').addClass('active');
                $('#sisu').siblings().removeClass('active');
                $(this).children('img').attr("src", "vendor/images/research/color_logos/4. CoESISU color.png");
                $('#cgsrhr-tab').children('img').attr("src", "vendor/images/research/white_logos/1. CGSRHR white.png");
                $('#uhc-tab').children('img').attr("src", "vendor/images/research/white_logos/2. CoEHSUHC white.png");
                $('#cueh-tab').children('img').attr("src", "vendor/images/research/white_logos/3. CUEH white.png");
                $('#cncdn-tab').children('img').attr("src", "vendor/images/research/white_logos/5. CNCDN white.png");

                $('#Research').removeClass('research-bg');
                $('#Research').removeClass('uhc-bg');
                $('#Research').removeClass('cueh-bg');
                $('#Research').removeClass('cgsrhr-bg');
                $('#Research').removeClass('cncdn-bg');
                $('#Research').addClass('sisu-bg');
            });
            $('#cncdn-tab').hover(function(){
                $(this).addClass('active');
                $(this).parent().siblings().children().removeClass('active');
                $('#cncdn').addClass('active');
                $('#cncdn').siblings().removeClass('active');
                $(this).children('img').attr("src", "vendor/images/research/color_logos/5. CNCDN color.png");
                $('#cgsrhr-tab').children('img').attr("src", "vendor/images/research/white_logos/1. CGSRHR white.png");
                $('#uhc-tab').children('img').attr("src", "vendor/images/research/white_logos/2. CoEHSUHC white.png");
                $('#cueh-tab').children('img').attr("src", "vendor/images/research/white_logos/3. CUEH white.png");
                $('#sisu-tab').children('img').attr("src", "vendor/images/research/white_logos/4. CoESISU white.png");

                $('#Research').removeClass('research-bg');
                $('#Research').removeClass('uhc-bg');
                $('#Research').removeClass('cueh-bg');
                $('#Research').removeClass('sisu-bg');
                $('#Research').removeClass('cgsrhr-bg');
                $('#Research').addClass('cncdn-bg');
            });


            $('#Research').mouseleave(function(){
                $('#Research').removeClass('uhc-bg');
                $('#Research').removeClass('cueh-bg');
                $('#Research').removeClass('sisu-bg');
                $('#Research').removeClass('cgsrhr-bg');
                $('#Research').removeClass('cncdn-bg');
                $('#Research').addClass('research-bg');

                $('#cgsrhr-tab').removeClass('active');
                $('#uhc-tab').removeClass('active');
                $('#cueh-tab').removeClass('active');
                $('#sisu-tab').removeClass('active');
                $('#cncdn-tab').removeClass('active');

                $('#intro').addClass('active');
                $('#intro').siblings().removeClass('active');

                $('#cgsrhr-tab').children('img').attr("src", "vendor/images/research/white_logos/1. CGSRHR white.png");
                $('#uhc-tab').children('img').attr("src", "vendor/images/research/white_logos/2. CoEHSUHC white.png");
                $('#cueh-tab').children('img').attr("src", "vendor/images/research/white_logos/3. CUEH white.png");
                $('#sisu-tab').children('img').attr("src", "vendor/images/research/white_logos/4. CoESISU white.png");
                $('#cncdn-tab').children('img').attr("src", "vendor/images/research/white_logos/5. CNCDN white.png");


            });

      }







    // Research Section mouse hover functionality End Here

    // Alternative System Start Here
    // Note:  Ei section er backend er kaj korar somoy image source jodi ei js file a na deoa jay tahole view file a
    // alada alada class diye source change korte hobe. 
    // jokhon white class active thakbe tokhon white source er image show korbe.
    // R jokhon color class thakbe tokhon color source er img tag show korbe.
    // Alternative System End

    //jQuery Code for back to top Start Here

    $('#top').hide();
    
    $(window).scroll(function(){    
        var wScroll = $(this).scrollTop();

        var showScrollButton = 50;

        if(wScroll > showScrollButton){
            $('#top').fadeIn();  
        }else{
            $('#top').fadeOut();
        }

    });
    //creating click function for back to top
    $('#top').click(function(){
        $('body, html').animate({
           scrollTop:0 
        }, 2000);
        return false;
    });
    //jQuery Code for back to top End Here



    // Training Section Heights
    var previous_training_height = $('.previous-trainings').outerHeight();
    $('.latest-training').css({
        "height":previous_training_height,
    });
    // Training Section Heights 






    // Code for Main Slider Start Here
    $('.publication-slider').owlCarousel({
        // items:4,
        merge:true,
        loop:true,
        autoplay:true,
        responsiveClass: true,
        autoplayHoverPause: true, // Stops autoplay
        responsiveRefreshRate : 10,
        autoplaySpeed:2000,
        autoplayTimeout:10000,
        smartSpeed:500,
        margin:10,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        navDots:false,
        lazyLoad:true,
        center:false,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:1
            },
            600:{
                items:1
            },
            1140:{
                items:4
            }
        }
    });






    // Code for Library Slider Start Here
    $('.library-slide').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        autoplay:true,
        responsiveClass: true,
        autoplayHoverPause: true, // Stops autoplay
        responsiveRefreshRate : 10,
        autoplaySpeed:2000,
        autoplayTimeout:10000,
        smartSpeed:500,
        margin:10,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        navDots:false,
        lazyLoad:true,
        center:false,
    });
    // Library Slider End Here


    // Advocacy Section Heights
    var advocacy_event_height = $('.homepage-events-list').innerHeight();
    if ($(window).width() > 1024) {
        $('.big').css({
            "height":advocacy_event_height,
            "overflow": 'hidden',
        });
    }
    // Advocacy Section Heights 








    // Code for Photo Gallery Start Here

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        }
    });

    $('.gallery-slide').owlCarousel({
        loop:true,
        autoplay:true,
        responsiveClass: true,
        autoplayHoverPause: true, // Stops autoplay
        responsiveRefreshRate : 10,
        autoplaySpeed:2000,
        autoplayTimeout:10000,
        smartSpeed:500,
        margin:15,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        navDots:false,
        lazyLoad:true,
        center:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
            },
            1140:{
                items:4,
            },
        }
    });
    // Code for photo gallery end here







    // Video popup code
    $('.video-link').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1',
                },
            },
            srcAction: 'iframe_src',
        },
    });






    //Testimonials slider

    $(document).ready(function(){
          $('.student-spech').owlCarousel({
            center: true,
            items:1,
            autoplay:true,
            autoplaySpeed: 1000,
            dots:true,
            loop:true,
            responsive:{
                600:{
                    items:1
                }
            }
        });
    });



});


// Wow initialize
new WOW().init();


