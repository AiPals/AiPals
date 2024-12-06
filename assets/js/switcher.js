// Light/Dark Mode Toggle
const themeSwitcher = document.getElementById("theme-switcher");
const colorPicker = document.getElementById("color-picker");

// Initial Theme Load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedColor = localStorage.getItem("accent-color") || "lightblue";

    document.body.classList.toggle("dark-mode", savedTheme === "dark");
    themeSwitcher.textContent = savedTheme === "dark" ? "☀️" : "🌙";

    document.documentElement.style.setProperty("--accent-color", savedColor);
    colorPicker.value = savedColor;
});

// Toggle Theme
themeSwitcher.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    themeSwitcher.textContent = isDarkMode ? "☀️" : "🌙";

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Change Accent Color
colorPicker.addEventListener("change", (event) => {
    const color = event.target.value;
    document.documentElement.style.setProperty("--accent-color", color);
    localStorage.setItem("accent-color", color);
});