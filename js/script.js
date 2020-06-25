$(document).ready(function() {

     $(window).scroll(function(){
         if($(this).scrollTop()>185){
         $('header.header').addClass('fixed-on');
         }
         else if ($(this).scrollTop()<185){
         $('header.header').removeClass('fixed-on');
         }
     });

    var projectSlider = $('.projects__slides').owlCarousel({
        smartSpeed: 400,
        loop:true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: true
            },

            750: {
                items: 3
            }
        }
    });

    $('.projects__slider-next').click(function() {
        projectSlider.trigger('next.owl.carousel');
    });

    $('.projects__slider-prev').click(function() {
        projectSlider.trigger('prev.owl.carousel');
    });

    $('.main-slider__next').click(function() {
        mainSlider.trigger('next.owl.carousel');
    });

    $('.main-slider__prev').click(function() {
        mainSlider.trigger('prev.owl.carousel');
    });

    var about = $('.about-owl').owlCarousel({
        smartSpeed: 400,
        loop:true,
        margin: 30,
        items: 1
    });

    var projectSlider = $('.blog__articles').owlCarousel({
        smartSpeed: 400,
        loop:true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: true
            },

            750: {
                items: 4
            }
        }
    });

    var mainSlider = $('.main-slides').owlCarousel({
        smartSpeed: 800,
        loop:true,
        items: 1
    });
    var mainSliderLinks = $('.main-slider__link');
    mainSliderLinks.on('click', function() {
        mainSliderLinks.removeClass('active');
        mainSlider.trigger('to.owl.carousel', $(this).addClass('active').index());
    });

    mainSlider.on('changed.owl.carousel', function(event) {
        mainSliderLinks.removeClass('active').eq(event.page.index).addClass('active');
    });

    $('body').on('click', function() {
        $('.select').removeClass('open');
    });

    $('.select').on('click', function(e) {
        e.stopPropagation();
        $(this).toggleClass('open');
    });

    $('.select__list').on('click', function(e) {
        e.stopPropagation();
    });

    $('.select__item').on('click', function() {
        $(this)
            .parents('.select')
            .removeClass('open')
            .find('.form__field')
            .val($(this).text());
    });

    $('.js-popup-link').on('click', function (e) {
        e.preventDefault();
        var self = this;
        var overlay = '.overlay';

        $('html').height($(window).height()).css('overflow', 'hidden');
        $('.page-wrap').css('overflow', 'scroll');

        $(overlay).fadeIn(400,
            function () {
                $($(self).data('href'))
                    .css('display', 'block')
                    .stop().animate({opacity: 1}, 300);
            });
        return false;
    });

    function popupClose() {
        $('.popup')
            .stop().animate({opacity: 0}, 300,
            function () {
                $('.page-wrap').css('overflow', 'hidden');
                $('html').css('overflow', 'auto');
                $(this).css('display', 'none');
                $('.overlay').stop().fadeOut(400);
            }
        );
    }

    $('.popup').on('click', function(e){
        e.stopPropagation();
    });

    $('.popup__close, .overlay, .popup__return').on('click', popupClose);
    $('body').keyup(function(e){
        if(e.keyCode == 27) {
            popupClose();
        }
    });

    $('.drop__links li').hover(function() {
        var index = $(this).index();
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.drop').find('.drop__tab').removeClass('active').eq(index).addClass('active');
    });
});