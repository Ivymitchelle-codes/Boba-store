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

let cart = [];

function addToCart(productName,price)
{
   //Add the item to our cart array
   cart.push({name: productName, price:price}); 

   //Calculate  the totalusing a loop (The math)
   let total = 0;
   cart.forEach(item=>{
    total += item.price;
   });

   //Update the ui : show the count and the total money
   document.getElementById('cart-count').innerText = cart.length;

   //If you have a cart total span updat here

   if(document.getElementById('cart-total')){
    document.getElementById('cart-total').innerText = currentTotal;
   }
   
   //update the ui(we'll alert for now, but see step 3)
   //alert(`${productName} added! Total items:${cart.length} | Total : Ksh ${total}`);

   console.log("New Total : Ksh", + currentTotal);
}