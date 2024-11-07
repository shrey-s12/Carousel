const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const progressBar = document.querySelector('.progress');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let currentIndex = 0;
const slideInterval = 3000;
let intervalId;

// Function to show a specific slide
function showSlide(index) {
    currentIndex = index % items.length;
    if (currentIndex < 0) {
        currentIndex = items.length - 1; // Wrap around to last item
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Reset and animate the progress bar
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';

    setTimeout(() => {
        progressBar.style.transition = `width ${slideInterval}ms linear`;
        progressBar.style.width = '100%';
    }, 50);
}

// Event listeners for navigation buttons
prevButton.addEventListener('click', () => {
    clearInterval(intervalId); // Stop auto-slide
    showSlide(currentIndex - 1);
    startAutoSlide(); // Restart auto-slide
});

nextButton.addEventListener('click', () => {
    clearInterval(intervalId); // Stop auto-slide
    showSlide(currentIndex + 1);
    startAutoSlide(); // Restart auto-slide
});

// Function to start auto-slide
function startAutoSlide() {
    intervalId = setInterval(nextSlide, slideInterval);
}

// Initialize carousel
showSlide(currentIndex);
startAutoSlide();
