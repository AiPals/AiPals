
// Function to toggle Light/Dark Theme
document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.getElementById("theme-switcher");

    // Load initial theme state from local storage if available
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.toggle("dark-mode", savedTheme === "dark");
    themeSwitcher.textContent = savedTheme === "dark" ? "☀️" : "🌙";

    themeSwitcher.addEventListener("click", () => {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        themeSwitcher.textContent = isDarkMode ? "☀️" : "🌙";

        // Save theme state to local storage
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });
});

// Function to change accent color
document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("color-picker");

    // Apply the saved accent color from local storage
    const savedColor = localStorage.getItem("accent-color") || "blue";
    document.documentElement.style.setProperty("--accent-color", savedColor);
    colorPicker.value = savedColor;

    colorPicker.addEventListener("change", (event) => {
        const color = event.target.value;
        document.documentElement.style.setProperty("--accent-color", color);

        // Save the accent color to local storage
        localStorage.setItem("accent-color", color);
    });
});