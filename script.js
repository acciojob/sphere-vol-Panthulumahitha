function volume_sphere(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let radiusInput = document.getElementById("radius").value;
    let radius = parseFloat(radiusInput);

    // Validate input: should be a non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Calculate volume using formula V = (4/3) * π * r³
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    document.getElementById("volume").value = volume.toFixed(4);
}

// Ensure the function is triggered on form submission
window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};