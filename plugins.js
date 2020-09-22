var $,
    window,
    scrollToTOP = $('#scroll-top');
$(function () {
    'use strict';
    $('.carousel').carousel({
        interval: 5000
    });
    
    // Show Color Option Div When Click on gear
    
    $('.gear-checked').on('click', function () {
        $(this).siblings('.color-option').toggleClass('visible');
        if ($(this).siblings('.color-option').hasClass('visible')) {
            $(this).siblings('.color-option').animate({
                marginLeft: 0
            }, 600);
        } else {
            $(this).siblings('.color-option').animate({
                marginLeft: '-200px'
            }, 600);
        }
    });
    
    // Change Theme Color On Click
    
    var colorLi = $('.color-option ul li');
    
    colorLi
        .eq(0).css('backgroundColor', '#E36').end()
        .eq(1).css('backgroundColor', '#863bca').end()
        .eq(2).css('backgroundColor', '#586d9f').end()
        .eq(3).css('backgroundColor', '#ad6214');
    
    colorLi.on('click', function () {
        $("link[href*='theme']").attr('href', $(this).attr('data-value'));
    });
    
    // Scroll To Top Function
    
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollToTOP.fadeIn();
        } else {
            scrollToTOP.fadeOut();
        }
    });
    
    scrollToTOP.on('click', function () {
        $('html,body').animate({scrollTop: 0});
    });

    // Loading Section
    
    $('.loading-overlay .sk-cube-grid').fadeOut(3500, function () {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
        });
    });
    
    // Nice Scroll 
    $('html').niceScroll({
        cursorwidth: "10px"
    });
    
});

