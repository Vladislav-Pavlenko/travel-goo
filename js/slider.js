document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper-container-reviews-js", {
    initialSlide: 1,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper-container-numbers-js", {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper-container-social-js", {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper-container-italy-js", {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: 10,
    loop: false,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1023: {
        slidesPerView: 5,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper-container-ukraine-js", {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: 10,
    loop: false,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1023: {
        slidesPerView: 5,
      },
    },
  });
});
