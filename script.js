document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1, // Display 2 testimonials per slide
        spaceBetween: 30, // Add spacing between slides
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 1, // 2 slides on larger screens
            },
            768: {
                slidesPerView: 1, // 1 slide on tablets
            },
            480: {
                slidesPerView: 1, // 1 slide on mobile devices
            }
        }
    });
});
