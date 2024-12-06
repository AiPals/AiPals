// Light/Dark Mode Toggle
const themeSwitcher = document.getElementById("theme-switcher");
const colorPicker = document.getElementById("color-picker");

// Ensure DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedColor = localStorage.getItem("accent-color") || "lightblue";

    // Apply saved theme
    document.body.classList.toggle("dark-mode", savedTheme === "dark");
    themeSwitcher.textContent = savedTheme === "dark" ? "☀️" : "🌙";

    // Apply saved accent color
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