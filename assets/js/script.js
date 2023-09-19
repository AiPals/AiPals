document.addEventListener("DOMContentLoaded", function() {
    const craneHook = document.getElementById("craneHook");

    craneHook.addEventListener("mouseover", function() {
        craneHook.style.bottom = "100px"; // Move the hook up
    });

    craneHook.addEventListener("mouseout", function() {
        craneHook.style.bottom = "0"; // Return the hook to its original position
    });
});
