// Function to calculate the area of a circle
function getCircleArea() {
    const radius = parseFloat(document.getElementById("radius").value.trim());
    if (isNaN(radius)) {
        alert("Please enter a valid number for the radius.");
        return;
    }
    const area = Math.PI * Math.pow(radius, 2);
    document.getElementById("circle-area").value = area.toFixed(2);
}

// Function to calculate the area of a triangle
function getTriangleArea() {
    const base = parseFloat(document.getElementById("base").value.trim());
    const height = parseFloat(document.getElementById("height").value.trim());
    if (isNaN(base) || isNaN(height)) {
        alert("Please enter valid numbers for the base and height.");
        return;
    }
    const area = (base * height) / 2;
    document.getElementById("triangle-area").value = area.toFixed(2);
}

// Function to calculate the area of a square
function getSquareArea() {
    const side = parseFloat(document.getElementById("side").value.trim());
    if (isNaN(side)) {
        alert("Please enter a valid number for the side.");
        return;
    }
    const area = Math.pow(side, 2);
    document.getElementById("square-area").value = area.toFixed(2);
}

// Function to calculate the area of a rectangle
function getRectangleArea() {
    const width = parseFloat(document.getElementById("width").value.trim());
    const height = parseFloat(document.getElementById("height").value.trim());
    if (isNaN(width) || isNaN(height)) {
        alert("Please enter valid numbers for the width and height.");
        return;
    }
    const area = width * height;
    document.getElementById("rectangle-area").value = area.toFixed(2);
}