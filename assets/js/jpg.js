$(document).ready(function(){



    // Video popup code
    $('.video-link').magnificPopup({
        type: 'iframe',
        iframe: {
            markup:
                '<div class="mfp-iframe-scaler">' +
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



	// Senior Members Slider
	$('.senior-members').owlCarousel({
        items:4,
        merge:true,
        loop:true,
        autoplay:false,
        autoplaySpeed:2000,
        autoplayTimeout:10000,
        smartSpeed:500,
        margin:30,
        nav:false,
        navDots:true,
        lazyLoad:true,
        center:false,
        responsive:{
            480:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4,
            }
        }
    });
	

    //Code for sticky menu
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




    // $('.search-bar').css('display', 'none');
    $('.search-icon').click(function(){
        $('.search-bar').toggle(300);
        $(this).children('svg').removeClass('fa-search');
    });



    // About page about info section height
    $('.about-video').height($('.about-info').height());
    $('.about-video').css('overflow', 'hidden');



    $('.single-faq.active').children('.faq-answer').css('display', 'block')
    $('.faq-question').click(function(){
        $(this).parent('.single-faq').addClass('active');
        $(this).siblings('.faq-answer').toggle(100);
        $(this).parent('.single-faq').siblings('.single-faq').removeClass('active');
    });


    $('.single-faq.general.active').children('.faq-answer').css('display', 'block')
    $('.faq-question').click(function(){
        $(this).parent('.single-faq.general').siblings('.single-faq.general').removeClass('active');
        $(this).find('img').attr('src', 'assets/images/mph/about/white-up.png');
        $(this).parent('.single-faq.general').siblings('.single-faq.general').find('img').attr('src', 'assets/images/mph/about/black-down.png');
    });


    // $('.yearly-training-list').mouseenter(function(){
    // 	$(this).find('img').attr('src', 'assets/images/training/icon/classroom-white.png');
    // });

    // $('.yearly-training-list').mouseleave(function(){
    // 	$(this).find('img').attr('src', 'assets/images/training/icon/classroom-black.jpg');
    // });



    // CPSD ICONS Functionality

    $('.cpsd-icon-one').mouseenter(function(){
    	$(this).find('img').attr('src', 'assets/images/training/icon/presentation-white-color.png');
    });

    $('.cpsd-icon-one').mouseleave(function(){
    	$(this).find('img').attr('src', 'assets/images/training/icon/presentation-till-color.png');
    });


    $('.cpsd-icon-two').mouseenter(function(){
        $(this).find('img').attr('src', 'assets/images/training/icon/1.1.png');
    });

    $('.cpsd-icon-two').mouseleave(function(){
        $(this).find('img').attr('src', 'assets/images/training/icon/1.png');
    });


    $('.cpsd-icon-three').mouseenter(function(){
        $(this).find('img').attr('src', 'assets/images/training/icon/2.2.png');
    });

    $('.cpsd-icon-three').mouseleave(function(){
        $(this).find('img').attr('src', 'assets/images/training/icon/2.png');
    });



    // Load more content functionality

    $('.show-more').click(function(){
        $(this).hide();
        $(this).siblings('.show-less').show();
        $(this).parent('.load-buttons').siblings('.load-content').css('display', 'block');
    });

    $('.show-less').click(function(){
        $(this).hide();
        $(this).siblings('.show-more').show();
        $(this).parent('.load-buttons').siblings('.load-content').hide(300);
    });



  $('.gallery').magnificPopup({
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
      titleSrc: function(item) {
        return '<small>---</small>' + item.el.attr('title');
      }
    }
  });






// $('#cgsrhr-tab').click(function(){
//     $('#Centres').removeClass('uhc-bg');
//     $('#Centres').removeClass('cueh-bg');
//     $('#Centres').removeClass('sisu-bg');
//     $('#Centres').removeClass('cncdn-bg');
//     $('#Centres').addClass('cgsrhr-bg');
// });

// $('#hsuhc-tab').click(function(){
//     $('#Centres').removeClass('cgsrhr-bg');
//     $('#Centres').removeClass('cueh-bg');
//     $('#Centres').removeClass('sisu-bg');
//     $('#Centres').removeClass('cncdn-bg');
//     $('#Centres').addClass('uhc-bg');
// });

// $('#cueh-tab').click(function(){
//     $('#Centres').removeClass('cgsrhr-bg');
//     $('#Centres').removeClass('uhc-bg');
//     $('#Centres').removeClass('sisu-bg');
//     $('#Centres').removeClass('cncdn-bg');
//     $('#Centres').addClass('cueh-bg');
// });

// $('#sisu-tab').click(function(){
//     $('#Centres').removeClass('cgsrhr-bg');
//     $('#Centres').removeClass('uhc-bg');
//     $('#Centres').removeClass('cueh-bg');
//     $('#Centres').removeClass('cncdn-bg');
//     $('#Centres').addClass('sisu-bg');
// });

// $('#cncdn-tab').click(function(){
//     $('#Centres').removeClass('cgsrhr-bg');
//     $('#Centres').removeClass('uhc-bg');
//     $('#Centres').removeClass('sisu-bg');
//     $('#Centres').removeClass('cueh-bg');
//     $('#Centres').addClass('cncdn-bg');
// });




// Animation with wow
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: false,     // reset animation on end (default is true)
  }
);
wow.init();


    $('#main-slider').carousel({
        pause: "hover",
        interval: 8000,
        ride: true,
        wrap: true,
    });





    // Testimonial Slider
    $(".testimonial-slider").slick({
        dots: true,
        autoplaySpeed: 6000,
        infinite: true,
        speed: 1500,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        margin:30
    });

    // ETRA Slider
    $(".etra-slider").slick({
        dots: true,
        autoplaySpeed: 6000,
        infinite: true,
        speed: 1500,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        margin:30
    });

    //Communication-tools-slider Slider
    $(".communication-tools-slider").slick({
        dots: true,
        autoplaySpeed: 6000,
        infinite: true,
        speed: 1500,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        margin:30
    });












    // Senior Members Slider
    $('.etra-page-slider').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        autoplay:true,
        autoplaySpeed:2000,
        autoplayTimeout:10000,
        smartSpeed:500,
        margin:30,
        nav:false,
        navDots:true,
        lazyLoad:true,
        center:false,
        responsive:{
            480:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1,
            }
        }
    });






        myEvents = [
            { name: "Course No: MPH-700", date: "March/28/2021", type: "event" },
            { name: "Course No: MPH-701", date: "March/29/2021", type: "event" },
            { name: "Course No: MPH-702", date: "March/30/2021", type: "event" },
            { name: "Course No: MPH-703", date: "March/31/2021", type: "event" },
            { name: "Course No: MPH-704", date: "April/01/2021", type: "event" },
            { name: "Course No: MPH-705", date: "April/02/2021", type: "event" },
            { name: "Course No: MPH-706", date: "April/03/2021", type: "event" },
            { name: "Course No: MPH-707", date: "April/04/2021", type: "event" },
            { name: "Course No: MPH-708", date: "April/05/2021", type: "event" },
        ],

        $('#evoCalendar').evoCalendar({
            theme: 'Orange Coral',
            calendarEvents: myEvents,
            canAddEvent:false,
            eventListToggler:false,
            sidebarDisplayDefault:false,

        });




    // Advocacy Block Slider
    $(".advocacy-event-slider").slick({
        dots: true,
        autoplaySpeed: 6000,
        infinite: true,
        speed: 1500,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        margin:30
    });

    


});

