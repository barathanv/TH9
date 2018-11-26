
jQuery(document).ready(initializeHlfJs($));

function initializeHlfJs($){


  // Opens/collapses mega menu based on viewport width
    var viewportWidth = $(window).width();

  if (viewportWidth < 1225) {
        $('.cd-dropdown').removeClass('dropdown-is-active'); 
        $('.cd-dropdown').mouseenter(
            function(){$(this).addClass('dropdown-is-active'); }
      ); 
      $('.cd-dropdown').mouseleave(
            function(){$(this).removeClass('dropdown-is-active'); }
      ); 
    }

  // Shows Mobile Search
    $('#toggle-search').on('click', function(){ 
        $('.global-search').toggle();
        $(this).find('i').toggleClass('icon-magnifier-fl-1 icon-delete-ln-3');
    });

    // Show accounts menu
    $('#toggle-account').on('click', function(){
      if ($('.notifications-preview').hasClass('active')) {
        $('.notifications-preview').toggleClass('active');
      }
        $('.my-account').toggleClass('active');
        $('body').toggleClass('stop-scroll');
    });

    // Show notifications preview
    $('#toggle-notifications').on('click', function(){
      if ($('.my-account').hasClass('active')) {
        $('.my-account').toggleClass('active');
      }
        $('.notifications-preview').toggleClass('active');
        $('body').toggleClass('stop-scroll');
    }); 

    // Close btn in notifications
    $('.notifications-close').on('click', function(){
        $('.notifications-preview').toggleClass('active');
        $('body').toggleClass('stop-scroll');
    }); 

  //open/close mega-navigation
  $('.cd-dropdown-trigger').on('click', function(event){
    event.preventDefault();
    toggleNav();
  });

  //close meganavigation
  $('.cd-dropdown .cd-close').on('click', function(event){
    event.preventDefault();
    toggleNav();
  });

  //on mobile - open submenu
  $('.has-children').children('a').on('click', function(event){
    //prevent default clicking on direct children of .has-children 
    var viewportWidth = $(window).width();
    if (viewportWidth < 999) {
      event.preventDefault();
    }
    var selected = $(this);
    selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
  });

  //on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
  var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
  $('.cd-dropdown-content').menuAim({
        activate: function(row) {
          $(row).children().addClass('is-active').removeClass('fade-out');
          if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
          $(row).children().removeClass('is-active');
          if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
            $('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
            $(row).children('ul').addClass('fade-out')
          }
        },
        exitMenu: function() {
          $('.cd-dropdown-content').find('.is-active').removeClass('is-active');
          return true;
        },
        submenuDirection: submenuDirection,
    });

  //submenu items - go back link
  $('.go-back').on('click', function(){
    var selected = $(this),
      visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
    selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
  }); 

  function toggleNav(){
    var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
    $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
    $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
    if( !navIsVisible ) {
      $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('.has-children ul').addClass('is-hidden');
        $('.move-out').removeClass('move-out');
        $('.is-active').removeClass('is-active');
      }); 
    }
  }

  //IE9 placeholder fallback
  //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
  // if(!Modernizr.input.placeholder){
  //  $('[placeholder]').focus(function() {
  //    var input = $(this);
  //    if (input.val() == input.attr('placeholder')) {
  //      input.val('');
  //      }
  //  }).blur(function() {
  //    var input = $(this);
  //      if (input.val() == '' || input.val() == input.attr('placeholder')) {
  //      input.val(input.attr('placeholder'));
  //      }
  //  }).blur();
  //  $('[placeholder]').parents('form').submit(function() {
  //      $(this).find('[placeholder]').each(function() {
  //      var input = $(this);
  //      if (input.val() == input.attr('placeholder')) {
  //        input.val('');
  //      }
  //      })
  //  });
  // }

    $('.v-7 #recentViewed1').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 8,
          slidesToScroll: 4,
          appenArrows: $('#recentViewed2'),
          responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
              breakpoint: 620,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

    $('.v-7 #recentViewed2').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 6,
          slidesToScroll: 3,
          appenArrows: $('#recentViewed2'),
          responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
              breakpoint: 620,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

    $('.v7 #recProducts').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 4,
          appenArrows: $('#recProducts'),
          responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 620,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
}

	// OLD NAV JQUERY
    // Adjusts positioning of volume meter and global nav
    /*if (viewportWidth > 999) {
        if (viewportWidth > 1524) {
            $('.cd-dropdown-trigger').addClass('dropdown-is-active');
            $('.cd-dropdown').addClass('dropdown-is-active');
        }
        else {
            $('.cd-dropdown-trigger').removeClass('dropdown-is-active');
            $('.cd-dropdown').removeClass('dropdown-is-active'); 
            $('.cd-dropdown').hover(
                function(){$(this).toggleClass('dropdown-is-active'); }
            );
        }
    }*/