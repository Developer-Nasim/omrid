(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (e){ 
    e.preventDefault()
    $('.mobile-menu').toggleClass('siteBar');
    $('.menu_overlay').toggleClass('show');
  }); 

    
  // owlCarousel
  $(".allInsights").owlCarousel({
    loop: true, 
    items: 1,
    navText: [
      '<img src="assets/img/arrow-left.png" alt="">',
      '<img src="assets/img/arrow-right.png" alt="">'
    ],
    nav: true,
    dots: false,
    // responsive: {
    //   0: {
    //     items: 2
    //   },
    //   767: {
    //     items: 3
    //   },
    //   992: {
    //     items: 6
    //   }
    // }
  });

 
  
 
})(jQuery);
