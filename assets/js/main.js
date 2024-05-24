(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (e){ 
    e.preventDefault()
    $('.mobile-menu').toggleClass('siteBar');
    $('.menu_overlay').toggleClass('show');
  }); 

    
  // All insights slider
  $(".allInsights").owlCarousel({
    loop: true, 
    items: 1,
    navText: [
      '<img src="assets/img/arrow-left.png" alt="">',
      '<img src="assets/img/arrow-right.png" alt="">'
    ],
    nav: true,
    dots: false 
  });
    
  // All cases slider
  $(".all_cases_thumbs").owlCarousel({
    loop: true, 
    items: 3,
    margin:20,
    navText: [
      '<img src="assets/img/arrow-left.png" alt="">',
      '<img src="assets/img/arrow-right.png" alt="">'
    ],
    nav: true,
    dots: false,
    touchDrag:false,
    mouseDrag:false,
    responsive: {
      0: {
        margin:0,
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  function clickToSeeDetails() {
    const items = document.querySelectorAll('.single_case_thumb')
    const single_case_details_h1 = document.querySelector('.single_case_details h1')
    const single_case_details_p = document.querySelector('.single_case_details p')
    const single_case_details_b = document.querySelector('.single_case_details b')
    if (items.length > 0) {
      items.forEach(item => {
        item.addEventListener('click', () => {

          items.forEach(itm => {
            itm.classList.remove('active')
          }) 
          item.classList.add('active') 
          single_case_details_h1.innerHTML = item.querySelector('h4').innerHTML
          single_case_details_p.innerHTML = item.querySelector('p').innerHTML
          single_case_details_b.innerHTML = item.querySelector('span').innerHTML
        })
      })
    }
  }
  clickToSeeDetails()
  
 
})(jQuery);
