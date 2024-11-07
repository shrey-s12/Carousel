document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const progressBar = document.querySelector('.progress');
    let currentIndex = 0;
    const slideInterval = 3000;

    function showSlide(index) {
        currentIndex = index % items.length;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';

        setTimeout(() => {
            progressBar.style.transition = `width ${slideInterval}ms linear`;
            progressBar.style.width = '100%';
        }, 50);
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, slideInterval);
});
