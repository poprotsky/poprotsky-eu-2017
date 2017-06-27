$(document).ready(function(){
    //
    // heading--large mobile
    //
    function window_height() {
        if($('.heading--large').length) {
            if(!device.desktop() || $(window).width() < 1200) {
                var $window_height = $(window).height();
                $('.heading--large').css('height', $window_height);
            }
        }
    }
    window_height();
   
    // 
    // WINDOW FUNCTIONS
    // 
    $(window)
        .scroll(function(){
            // fade out heading content
            $('.heading__content').css('opacity', 1 - $(window).scrollTop() / 300);

            $('.heading--large .heading__content, .scroll-down').css('opacity', 1 - $(window).scrollTop() / 500);
        })
        .on('load resize', function(){
            window_height();
            // masonry
            $('.masonry').masonry({
                columnWidth: '.project__img',
                itemSelector: '.project__img',
                //horizontalOrder: true,
                //gutter: 100
            });
        });
    // 
    // END WINDOW FUNCTIONS
    // 

    //
    // BODY FUNCTIONS
    //

    // disabled scrolling
    $('body')
      .on('click', '.menu-trigger', function(){
        $('html').toggleClass('nav-is-open');
      })
      .on('click touchend', function(e){
        if(!$(e.target).closest('.menu-trigger').length) {
          if(!$(e.target).closest('.main-header__nav').length) {
            $('body').removeClass('nav-is-open');
          }
        }
      })
      .on('touchmove', function(e){
        if($('html').hasClass('nav-is-open')) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
      });

    //
    // scroll down
    //
    $('.scroll-down').on('click', function(){
      var $scroll_el = $(this).attr('href');
      if ($($scroll_el).length) {
        $('html, body').animate({
          scrollTop: $($scroll_el).offset().top},
          500);
      }
      return false;
    });

    // 
    // back to top
    // 
    $('.back-to-top').on('click', function(){
        $('html, body').animate({
          scrollTop: $('body').offset().top},
          500);
        return false;
    });

    // 
    // PLUGINS
    //

    //
    // parallax
    //
    if(!device.mobile() && !$('html').hasClass('ie')) {
      if($('[data-stellar-background-ratio]').length) {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 0
        });
      }
    }

    // typed
    if(!device.mobile()) {
        var $text = $('.typed').text();
        $('.typed').typed({
            strings: [$text],
            showCursor: false,
            typeSpeed: 5
        });
    }

    // lightbox 
    if($.fn.fancybox) {
    	$.extend(true, $.fancybox.defaults, {
    		hash : true
    	});

    	$('.lightbox').fancybox();
    }

    // validator
    if($.fn.validate) {
    	$.validator.setDefaults({
    		errorPlacement: function() {}
    	});

    	$('form.validate').each(function() {
    		$(this).validate();
    	});
    }

    //
    // browser navigator
    //
    var $browser_name = navigator.userAgent;

    if ($browser_name.toLowerCase().indexOf('firefox') > -1) {
        $('html').addClass('firefox');
    }
    if ($browser_name.toLowerCase().indexOf('safari') > -1) {
        $('html').addClass('safari');
    }
    if ($browser_name.toLowerCase().indexOf('chrome') > -1) {
        $('html').addClass('chrome').removeClass('safari');
    }
    if ($browser_name.toLowerCase().indexOf('opr') > -1) {
        $('html').addClass('opera').removeClass('safari chrome');
    }

    if ($browser_name.toLowerCase().indexOf('edge') > -1) {
        $('html').addClass('edge').removeClass('chrome');
    }
    if ($browser_name.toLowerCase().indexOf('trident') > -1) {
        $('html').addClass('ie ie-11');
    }
    if ($browser_name.toLowerCase().indexOf('msie 10.0') > -1) {
        $('html').addClass('ie-10').removeClass('ie-11');
    }
    if ($browser_name.toLowerCase().indexOf('msie 9.0') > -1) {
        $('html').addClass('ie-9').removeClass('ie-11');
    }
	
});
