$(document).ready(function () {
    let swiper = new Swiper(".swiper-event-1", {
      autoplay: {
      delay:3000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
    let swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 1,
      autoplay: {
      delay:3000,
    },
      grid: {
      rows: 2,
    },
      loop: false,
      spaceBetween: 30,
      pagination: {	
      el: ".swiper-pagination2",	
			clickable: true,	
			type : 'bullets',	
		  },
  });
    let swiper3 = new Swiper(".mySwiper3", {
      initialSlide: 1,
      autoplay: {
        delay:3000,
      },
      slidesPerView: "auto",
      spaceBetween: 30,
    });
    let swiper4 = new Swiper(".mySwiper4", {
      initialSlide: 1,
      slidesPerView: 3,
      slidesPerView: "auto",
      spaceBetween: 30,
    });
    // toggle로 on off 
    let toggle = 0;
    $('.container .footer-bottom-last img').on("click", function() {
      if (toggle == 0 ) {
        toggle = 1;
        $(".container .footer-bottom-last img").css({ transform : "rotate(0)" });
        $(".container .footer-bottom-toggle").slideDown().css({ display : "block", "margin-top" : "20px" });

      } else {
        toggle = 0;
        $(".container .footer-bottom-last img").css({ transform : "rotate(-180deg)" });
        $(".container .footer-bottom-toggle").slideUp().css({ display : "none" });
      }
    });
});