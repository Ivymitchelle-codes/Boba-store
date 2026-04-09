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
  /*  cart.push({name : productName, price : Number(price)});

    let currentTotal = 0;
    cart.forEach(item => {
        currentTotal += item.price;
    });

    document.getElementById('cart-count').innerText= cart.length;

    const totalElement = document.getElementById('cart-total');
    if (totalElement) {
        totalElement.innerText = currentTotal;
    }*/
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem){
        // if the cup and boba exists, just bump the number
        existingItem.quantity += 1;
    } else {
        //If it's new make the cup and add it with a quatity of 1
        cart.push({name : productName, price : Number(price), quantity :1});
    }
        updateCartUI();
    }
// remove function
function removeOne(productName){

    cart.itemIndex= cart.findIndex(item => item.name === productName);

    if(itemIndex > -1){
        if (cart[itemIndex].quantity > 1){
            cart[itemIndex].quantity -= 1;// Just take one away
        } else {
            cart.splice(itemIndex, 1); // If it's the last one , remove the whole cup and throw it away
        }
    }
    updateCartUI();
}
// check out section

function displayCartItems(){
    const cartList = document.getElementById("cart-items");
    const totalPopup = document.getElementById("cart-total-popup");
    
        cartList.innerHTML = "";// clear the old list
        let total = 0;// set cart to 0

        cart.forEach((item) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const li = document.createElement("li");
            li.className = "cart-item-row";
            li.innerHTML = `

            <div>
                <strong>${item.name}</strong><br>
                <small> Ksh ${item.price} x ${item.quantity}</small> 
            </div>
            <div>
                <span>Ksh ${itemTotal}</span>
                <button class="btn-remove" onclick="removeOne('${item.name}')">Remove</button>
                </div>               
                `;
                cartList.appendChild(li);
    });

    if (totalPopup) totalPopup.innerText = total;
    
}

function updateCartUI(){
    // Update the number in the cart icon
    // calculate the total quantity( 1 boba + 2burgers = 3 items)
    let totalItems = 0;
    cart.forEach(item=> totalItems += item.quantity);
    document.getElementById('cart-count').innerText = totalItems;

    // update the total money
    let currentTotal = 0;
    cart.forEach(item =>{
        currentTotal +=(item.price * item.quantity);
    });
    const totalElement = document.getElementById('cart-total');
    if (totalElement){
        totalElement.innerText = currentTotal;
    }
    
    console.log("Cart Updated!",cart);
    //add your count/total updates here
    displayCartItems();
}

function toggleCart() {
    const modal = document.getElementById("cart-modal");
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
        displayCartItems(); // Refresh the list every time it opens
    }
}