// open Weading Categories
// $(function() {
//   "use strict";

//Loader	
      $(function preloaderLoad() {
      if($('.preloader').length){
          $('.preloader').delay(300).fadeOut(300);
      }
      $(".preloader_disabler").on('click', function() {
          $("#preloader").hide();
      });
  });


// stickey nav
// $(window).on('scroll', function () {
//   let scrollTop = $(this).scrollTop();

//   if (scrollTop >= 500) {
//     $('#down').addClass('hide');
//   } else {
//     $('#down').removeClass('hide');
//   }
// });
// Weading Categories
// $('.card-hide').hide();
// function card_open(id){
//     $('.card-hide').hide(1000);           
// $('#'+id).toggle(1000);
// }
// slick slider
$('.sliders').slick({
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  arrows: false,
  responsive: [{
    breakpoint: 1000,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 3,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
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
$('.count').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 4,
  autoplay: true,
  arrows: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true, 
        dots: false
      }
    },
    {
    breakpoint: 1000,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 4,
      infinite: true,
      unslick:true,
      dots: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
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
  
$('.play').slick({
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 4,
  autoplay: true,
  arrows: false,
  responsive: [{
    breakpoint: 1000,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 3,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
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
// swiper js
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});