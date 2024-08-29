function toggleMenu() {
    // Code to show/hide the collapsible menu
    alert('Toggle menu functionality triggered.');
}

function toggleTheme() {
    // Switch between light and dark themes
    const root = document.documentElement;
    if (root.style.getPropertyValue('--background-color') === '#000') {
        root.style.setProperty('--background-color', '#fff');
        root.style.setProperty('--text-color', '#000');
    } else {
        root.style.setProperty('--background-color', '#000');
        root.style.setProperty('--text-color', '#fff');
    }
}

function toggleCollapse() {
    // Code to show/hide the features section
    const featuresContent = document.querySelector('.features-content');
    featuresContent.style.display = featuresContent.style.display === 'none' ? 'block' : 'none';
}
