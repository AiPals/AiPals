// Toggle Light/Dark Theme
const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeSwitcher.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Change Accent Color
const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('change', (event) => {
    const color = event.target.value;
    document.documentElement.style.setProperty('--accent-color', color);
});