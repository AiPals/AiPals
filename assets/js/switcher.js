// Toggle Light/Dark Theme
const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Change Accent Color
const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('change', (event) => {
    document.documentElement.style.setProperty('--accent-color', event.target.value);
});

// Toggle Collapsible Sections
function toggleCollapse(id) {
    const section = document.getElementById(id);
    section.classList.toggle('collapsed');
}