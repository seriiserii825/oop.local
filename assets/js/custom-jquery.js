jQuery(document).ready(function ($) {
  // const mainMenu = $("#js-main-menu");
  // let closeMenu = function () {
  //   $("#js-sandwitch-wrap").on("click", function () {
  //     if (mainMenu.hasClass("fixed")) {
  //       mainMenu.removeClass("fixed");
  //       $("body").css({
  //         overflow: "",
  //         paddingRight: "initial",
  //       });
  //     } else {
  //       $("body").css({
  //         overflow: "hidden",
  //         paddingRight: document.querySelector(".wrapper").offsetWidth + "px",
  //       });
  //       mainMenu.addClass("fixed");
  //     }
  //     $(this).toggleClass("sandwitch--active");
  //     $(this).closest(".sandwitch-wrapper").toggleClass("sandwitch--active");
  //   });
  // };
  // closeMenu();
  
  const blockServicesImages = $('.block-services__images');
  
  blockServicesImages.slick({
    arrows: false,
    dots: false,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    slidesToScroll: 1,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  
  const insuranceGallery = $('.insurance__gallery');
  insuranceGallery.slick({
    arrows: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    infinite: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
