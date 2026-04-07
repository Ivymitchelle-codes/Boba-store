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

//Cart code

let cart = [];

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cart-count");

function addToCart(productName, price){
    cart.push({name : productName, price : Number(price)});

    let currentTotal = 0;
    cart.forEach(item => {
        currentTotal += item.price;
    });

    document.getElementById('cart-count').innerText= cart.length;

    const totalElement = document.getElementById('cart-total');
    if (totalElement) {
        totalElement.innerText = currentTotal;
    }
    }