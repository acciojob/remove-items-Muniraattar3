document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('input[type="button"]');
    if (button) {
        button.addEventListener("click", function () {
            const colorSelect = document.getElementById("colorSelect");

            // Ensure colorSelect exists
            if (colorSelect && colorSelect.selectedIndex !== -1) {
                colorSelect.remove(colorSelect.selectedIndex);
            }
        });
    }
});
