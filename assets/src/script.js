$(document).ready(function() {

  var width = $(window).width(),
    startX,
    dist = 0;

  $(window).resize(function() {
    width = $(window).width();
  })

  $(function() {
    var isTouchDevice = ('ontouchstart' in window || 'onmsgesturechange' in window);

    if (!isTouchDevice) {
      $('.home-meteroid').on({
        mouseenter: function() {
          $('.wrapper_screen').addClass('inverted');
        },
        mouseleave: function() {
          $('.wrapper_screen').removeClass('inverted');
        }
      })

      $('.toc-category a').on({
        mouseenter: function() {
          $(this).parent().find('.toc-category--description').addClass('hover');
        },
        mouseleave: function() {
          $(this).parent().find('.toc-category--description').removeClass('hover');
        }
      })

      $('.toc-meteroid').on({
        mouseenter: function() {
          $(this).addClass('inverted');
        },
        mouseleave: function() {
          $(this).removeClass('inverted');
        }
      })
    }
  })

  $('body').mousemove(function(e) {
    if (e.pageX > width / 2)
      $('body').removeClass('yesterday')
    else
      $('body').addClass('yesterday')
  })

  if ($(window).width() < 769) {

    $('.wrapper_screen').on('touchstart ', function(e) {
      startX = e.originalEvent.touches[0].pageX;
      startY = e.originalEvent.touches[0].pageY;
    })

    $('.wrapper_screen').on('touchmove ', function(e) {
      dist = e.originalEvent.touches[0].pageX - startX;
      $('.toc-category.right, .toc-category.center').css('margin-right', dist / 1.5)
      $('.toc-category.left').css('margin-left', dist / 1)
    })

    $('.wrapper_screen').on('touchend ', function(e) {
      $('.toc-category, .toc-category img').css('margin-left', '0')
      $('.toc-category, .toc-category img').css('margin-right', '0')
    })
  }

})
