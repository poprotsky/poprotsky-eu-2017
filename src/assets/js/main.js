$(document).ready(function(){
    //
    // MAIN NAV
    //
    $('body')
      .on('click', '.menu-trigger', function(){
        $('body').toggleClass('nav-is-open');
      })
      .on('click touchend', function(e){
        if(!$(e.target).closest('.menu-trigger').length) {
          if(!$(e.target).closest('.main-header__nav').length) {
            $('body').removeClass('nav-is-open');
          }
        }
      })
      .on('touchmove', function(e){
        if($(this).hasClass('nav-is-open')) {
          //if(!$(e.target).closest('.main-header__nav').length) {
            e.preventDefault();
          //}
        }
      });

    // scroll up
    var $scroll_var,
        $current_scroll_position,
        $header_height = $('.main-header').outerHeight();

    $(document).scroll(function(){
      $current_scroll_position = $(document).scrollTop();
      var $heading_height = $('.heading').outerHeight();

      if($current_scroll_position > $heading_height) {
        // scroll Bottom
        if ($scroll_var < $current_scroll_position) {
          // $('body').addClass('nav-is-fixed');
          // if($('body').hasClass('nav-is-visible')) {
          //   $('body').addClass('nav-is-hidden');
          // }
          $('body').removeClass('fixed-btn-is-show');
        }
        // scroll Top
        else if ($scroll_var > $current_scroll_position) {
          // $('body').addClass('nav-is-visible');
          // $('body').removeClass('nav-is-hidden');
          $('body').addClass('fixed-btn-is-show');
        }
      }
      // scrollTop == 0
      // else if($current_scroll_position <= 0){
      //   // $('body').removeClass('nav-is-fixed nav-is-visible nav-is-hidden');
      //   // $('.main-header').addClass('transition');
      //   // setTimeout(function(){
      //   //   $('.main-header').removeClass('transition');
      //   // }, 300)
      // }
      else {
        $('body').removeClass('fixed-btn-is-show');
      }
      
      $scroll_var = $current_scroll_position;
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
    })
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
    		highlight: function(element, errorClass, validClass) {
    			var $element = $(element);
    			$element.addClass(errorClass).removeClass(validClass);
    			if ($element.attr('type') == 'checkbox' || $element.attr('type') == 'radio') {
    				if ($element.attr('type') == 'checkbox') {
    					$element.closest('.checkbox').addClass('error-checkbox');
    				} else if ($element.attr('type') == 'radio') {
    					$element.closest('.radio').addClass('error-radio');
    				}
    			} else if ($element.prop("tagName") == 'SELECT') {
    				$element.closest('.custom-select, .custom-select2, .custom-select2-multiple').addClass('select-error');
    			}
    		},
    		unhighlight: function(element, errorClass, validClass) {
    			var $element = $(element);
    			$element.removeClass(errorClass).addClass(validClass);
    			if ($element.attr('type') == 'checkbox' || $element.attr('type') == 'radio') {
    				if ($element.attr('type') == 'checkbox') {
    					$element.closest('.checkbox').removeClass('error-checkbox');
    				} else if ($element.attr('type') == 'radio') {
    					$element.closest('.radio').removeClass('error-radio');
    				}
    			} else if ($element.prop("tagName") == 'SELECT') {
    				$element.closest('.custom-select, .custom-select2, .custom-select2-multiple').removeClass('select-error');
    			}
    		},
    		errorPlacement: function() {
    		},
    		ignore: ':hidden:not([type="hidden"]):not(select)'
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

// fade out heading content
$(window).scroll(function(){
    $('.heading__content').css('opacity', 1 - $(window).scrollTop() / 300);

    $('.heading--large .heading__content, .scroll-down').css('opacity', 1 - $(window).scrollTop() / 500);
});

$(window).on('load resize', function(){
// masonry
  $('.masonry').masonry({
    columnWidth: '.project__img',
    itemSelector: '.project__img',
    //horizontalOrder: true,
    //gutter: 100
  });
});
