document.addEventListener("DOMContentLoaded", function () {
    const background = document.getElementById("directionsCtx");
    background.width = 500;
    background.height = 500;

    const directions = background.getContext("2d");
    directions.fillStyle = "yellow";
    directions.fillRect(0, 0, 300, 300);
}