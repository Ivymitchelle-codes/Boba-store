const cards = document.querySelectorAll(".circle-card");

// These are the 3 visual positions
const positions = ["front", "right", "left"];

// Function to apply the classes to cards
function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove("front", "right", "left");
        card.classList.add(positions[index]);
    });
}

// Move cards in rotation
function rotateCarousel() {
    positions.unshift(positions.pop());
    updateCarousel();
}

// First load
updateCarousel();

// Auto rotate every 2.5 seconds
setInterval(rotateCarousel, 2500);