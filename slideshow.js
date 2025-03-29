document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const slides = document.querySelectorAll(".slide");

    function showNextSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});