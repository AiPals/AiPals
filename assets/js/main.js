// Dark mode toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '🌜' : '🌞';
});

// Color button functionality
const colorButtons = document.querySelectorAll('.color-button');
const glassBoxes = document.querySelectorAll('.glass-box');
const slider = document.querySelector('.intensity-slider');

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        glassBoxes.forEach(box => {
            box.style.backgroundColor = color.replace(/[\d.]+\)$/, `${slider.value})`);
        });
    });
});

// Slider to adjust intensity
slider.addEventListener('input', () => {
    const selectedColor = document.querySelector('.color-button[style*="scale(1.1)"]')?.getAttribute('data-color') || 'rgba(173, 216, 230, 0.5)';
    glassBoxes.forEach(box => {
        box.style.backgroundColor = selectedColor.replace(/[\d.]+\)$/, `${slider.value})`);
    });
});

// Carousel navigation
const carousel = document.getElementById('carousel');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: -110, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: 110, behavior: 'smooth' });
});
