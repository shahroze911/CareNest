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

(function() {
    emailjs.init("062QrqU8Enk1it5Q6"); // Replace with your EmailJS Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send("service_mkyverp", "template_mm2iu85", formData)
    .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    }, function(error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
    });
});