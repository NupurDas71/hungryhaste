document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-rating .star');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            stars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            this.nextElementSibling && selectSiblings(this.nextElementSibling);
        });
    });


    function selectSiblings(el) {
        if (el) {
            el.classList.add('selected');
            selectSiblings(el.nextElementSibling);
        }
    }
});


   //signin

    document.getElementById('signin-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        var loginDiv = document.getElementById('logindiv');
        if (loginDiv.classList.contains('hidden')) {
            loginDiv.classList.remove('hidden');
        } else {
            loginDiv.classList.add('hidden');
        }
    });

//



//cart


//overlay
    function toggleDetails() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
    }
  
function closeOverlay() {
        document.getElementById('overlay').style.display = 'none'; // Hide overlay
        document.getElementById('place').style.display = 'none'; // Hide Place Order section
    }
   

    //quantity
    document.addEventListener("DOMContentLoaded", function() {
        const incrementButton = document.getElementById('increment');
        const decrementButton = document.getElementById('decrement');
        const quantityDisplay = document.getElementById('quantity-display').querySelector('span');
    
        incrementButton.addEventListener('click', function() {
            let currentValue = parseInt(quantityDisplay.textContent);
            quantityDisplay.textContent = currentValue + 1;
        });
    
        decrementButton.addEventListener('click', function() {
            let currentValue = parseInt(quantityDisplay.textContent);
            if (currentValue > 1) {
                quantityDisplay.textContent = currentValue - 1;
            }
        });
    });

 
    

  
    
    // Update the quantity of the item
// Initialize the base price for each coffee type
const coffeePrices = {
    "Americano": 80,
    "Cappuccino": 90,
    "Espresso": 85
};

let currentCoffeePrice = coffeePrices["Americano"]; // Default to Americano price
let extraItemsPrice = 0; // To store the price of selected extra items
let quantity = 1; // Default quantity is 1

// Function to update total price
function selectCoffeeType(radio) {
    // Get the selected coffee type price
    const selectedCoffee = radio.value;
    currentCoffeePrice = coffeePrices[selectedCoffee];

    // Get the selected extra items price
    extraItemsPrice = 0; // Reset extra items price
    const extraItems = document.querySelectorAll('input[name="Extraitem"]:checked');
    extraItems.forEach(item => {
        extraItemsPrice += parseFloat(item.value);
    });

    // Get the selected quantity
    quantity = parseInt(document.getElementById('quantitycofee').textContent);

    // Calculate the total price
    const totalPrice = (currentCoffeePrice + extraItemsPrice) * quantity;
    
    // Display the total price
    const priceContainer = document.querySelector('.price-container h4:last-child');
    priceContainer.textContent = `₹${totalPrice.toFixed(2)}`;
}

// Update quantity when user clicks '+' or '-'
function updateQuantity(change) {
    const quantityElement = document.getElementById('quantitycofee');
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity += change;

    // Prevent quantity from going below 1
    if (currentQuantity < 1) return;

    quantityElement.textContent = currentQuantity;
    selectCoffeeType({ value: document.querySelector('input[name="coffee"]:checked').value });
}





// Update the quantity of the item and ensure it's between 1 and 5
function updateQuantity(amount) {
    let quantityElement = document.getElementById('quantitycofee');
    let quantity = parseInt(quantityElement.innerText);

    // Adjust quantity with limits
    quantity += amount;
    if (quantity < 1) quantity = 1; // Set minimum limit to 1
    if (quantity > 5) quantity = 5; // Set maximum limit to 5

    quantityElement.innerText = quantity; // Update the displayed quantity
    updateTotalPrice(); // Update total price when quantity changes
}

// Update the total price based on the selected options
function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantitycofee').innerText);
    const coffeeType = document.querySelector('input[name="coffee"]:checked').value;
    const extraItem = document.querySelector('input[name="Extraitem"]:checked')?.value || 0;

    // Base prices for different coffee types
    let basePrice = 80.00; // Default base price for "Americano"
    if (coffeeType === "Cappuccino") basePrice = 90.00;
    if (coffeeType === "Espresso") basePrice = 70.00;

    const extraPrice = parseFloat(extraItem);
    const totalPrice = (basePrice + extraPrice) * quantity;

    // Update the total price in the DOM
    document.getElementById('totalPrice').innerText = `₹${totalPrice.toFixed(2)}`;
}

// Event listeners for increment and decrement buttons
document.addEventListener('DOMContentLoaded', function() {
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    
    incrementButton.addEventListener('click', function() {
        updateQuantity(1); // Increment by 1
    });
    
    decrementButton.addEventListener('click', function() {
        updateQuantity(-1); // Decrement by 1
    });
});




//refresh
// Function to check the form validity


//add to cart



//overlay div
function proceedToCheckoutcoffee() {
    const totalPriceElement = document.getElementById('totalPrice'); // Corrected ID
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}





// Toggle Pizza Alto Alt Details
function toggleDetailsPizzaAlt() {
    document.getElementById("overlayPizzaAlt").classList.remove("hidden");
}

// Close Pizza Alto Alt Details
function closeOverlayPizzaAlt() {
    document.getElementById("overlayPizzaAlt").classList.add("hidden");
}

// Update Pizza Alto Alt Quantity (increments 1 → 2 → 3 → 4 → 5)
function updateQuantityPizzaAlt(change) {
    let quantityElement = document.getElementById("quantityPizzaAlt");
    let quantity = parseInt(quantityElement.innerText);

    // Ensure the quantity stays between 1 and 5
    if (quantity + change >= 1 && quantity + change <= 5) {
        quantityElement.innerText = quantity + change;
        calculateTotalPizzaAlt(); // Update total price dynamically
    }
}

// Calculate Total Price for Pizza Alto Alt
function calculateTotalPizzaAlt() {
    let basePrice = parseInt(document.querySelector('input[name="pizzaType"]:checked').value);
    let extraItems = document.querySelectorAll('input[name="pizzaExtra"]:checked');
    let extraCost = 0;

    extraItems.forEach(item => {
        extraCost += parseInt(item.value);
    });

    let quantity = parseInt(document.getElementById("quantityPizzaAlt").innerText);
    let total = (basePrice + extraCost) * quantity;
    document.getElementById("totalPricePizzaAlt").innerText = `₹${total.toFixed(2)}`;
}

// Add to Cart Function

function proceedToCheckoutpizza() {
    const totalPriceElement = document.getElementById('totalPricePizzaAlt'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
//burger

// Toggle Burger Details
function toggleDetailsBurger() {
    document.getElementById("overlayBurger").classList.remove("hidden");
}

// Close Burger Details
function closeOverlayBurger() {
    document.getElementById("overlayBurger").classList.add("hidden");
}

// Update Burger Quantity (increments from 1 to 5, decreases from 5 to 1)
function updateQuantityBurger(change) {
    let quantityElement = document.getElementById("quantityBurger");
    let quantity = parseInt(quantityElement.innerText);

    if (change > 0 && quantity < 5) {
        quantityElement.innerText = quantity + 1;
    } else if (change < 0 && quantity > 1) {
        quantityElement.innerText = quantity - 1;
    }
    
    calculateTotalBurger();
}
function proceedToCheckoutBurger() {
    const totalPriceElement = document.getElementById('totalPriceBurger'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
// Calculate Total Price for Burger
function calculateTotalBurger() {
    let basePrice = 150; // Assuming the highest base price of the burger
    let extraItems = document.querySelectorAll('input[name="Extraitem"]:checked');
    let extraCost = 0;

    extraItems.forEach(item => {
        extraCost += parseInt(item.value);
    });

    let quantity = parseInt(document.getElementById("quantityBurger").innerText);
    let total = (basePrice + extraCost) * quantity;
    document.getElementById("totalPriceBurger").innerText = `₹${total.toFixed(2)}`;
}

// Proceed to Checkout for Burger


// Function to add items to cart
function addToCart(itemName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve or initialize cart
    
    // Convert price to a number to avoid issues
    let priceNum = parseFloat(price) || 0;

    // Add the item to the cart array
    cart.push({ name: itemName, price: priceNum });

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Confirmation alert
    alert(`${itemName} has been added to your cart!`);
}

// Ensure all "Add to Cart" buttons work dynamically
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        let itemName = this.getAttribute("data-name");
        let price = this.getAttribute("data-price");

        addToCart(itemName, price);
    });
});





//icecream
// Show/hide the Ice-Cream order overlay
function toggleDetailsIcecream() {
    document.getElementById("overlayIcecream").classList.toggle("hidden");
}

// Close the Ice-Cream overlay
function closeOverlayIceCream() {
    document.getElementById("overlayIcecream").classList.add("hidden");
}

// Update Ice-Cream quantity
function updateQuantityIceCream(value) {
    let quantityElem = document.getElementById("quantityIceCream");
    let quantity = parseInt(quantityElem.innerText);

    if (quantity + value > 0) {
        quantity += value;
        quantityElem.innerText = quantity;
        calculateTotalIceCream();
    }
}

// Calculate total price based on quantity and toppings
function calculateTotalIceCream() {
    let basePrice = 50; // Base price of Ice-Cream
    let quantity = parseInt(document.getElementById("quantityIceCream").innerText);
    
    // Check selected flavor
    let selectedFlavor = document.querySelector("input[name='iceCreamFlavor']:checked").value;
    if (selectedFlavor === "Chocolate") basePrice = 60;
    if (selectedFlavor === "Strawberry") basePrice = 70;

    // Extra toppings cost
    let toppingPrice = 0;
    document.querySelectorAll("input[name='toppings']:checked").forEach((topping) => {
        if (topping.value === "Nuts") toppingPrice += 10;
        if (topping.value === "ChocoChips") toppingPrice += 15;
        if (topping.value === "Caramel") toppingPrice += 20;
    });

    // Calculate total price
    let totalPrice = (basePrice + toppingPrice) * quantity;
    document.getElementById("totalPriceIceCream").innerText = `₹${totalPrice.toFixed(2)}`;
}

// Add Ice-Cream to cart


// Proceed to Checkout
function proceedToCheckouticecream() {
    const totalPriceElement = document.getElementById('totalPriceIceCream'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}


function proceedToPayvegdelight() {
    const totalPriceElement = document.getElementById('totalPricevegdelight'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaypannermasala() {
    const totalPriceElement = document.getElementById('totalPricepannermasala'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPayvegdaltadka() {
    const totalPriceElement = document.getElementById('totalPricevegdaltadka'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPayvegbiriyani() {
    const totalPriceElement = document.getElementById('totalPricevegbiriyani'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPaymasaladosa() {
    const totalPriceElement = document.getElementById('totalPricemasaladosa'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}



function proceedToPaydoubleclassicburger() {
    const totalPriceElement = document.getElementById('totaldoubleclassicburger()'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}   
function proceedToPayvegburger() {
    const totalPriceElement = document.getElementById('totalvegburger'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaybbq() {
    const totalPriceElement = document.getElementById('totalbbq'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}   
function proceedToPayspicypannerbr() {
    const totalPriceElement = document.getElementById('totalspicypannerbr'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPayccbg() {
    const totalPriceElement = document.getElementById('totalccbg'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}   



function proceedToPaycb() {
    const totalPriceElement = document.getElementById('totalcb'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaymb() {
    const totalPriceElement = document.getElementById('totalmb'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}





function proceedToPaycb() {
    const totalPriceElement = document.getElementById('totalcb'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaymb() {
    const totalPriceElement = document.getElementById('totalmb'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaycb() {
    const totalPriceElement = document.getElementById('totalcb'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPayfriedmomo() {
    const totalPriceElement = document.getElementById('totalfriedmomo'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaychickenmomo() {
    const totalPriceElement = document.getElementById('totalchickenmomo'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaysteamedmomo() {
    const totalPriceElement = document.getElementById('totalsteamedmomo'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPayrosogolla() {
    const totalPriceElement = document.getElementById('totalrosogolla'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaynolengurerrosogolla() {
    const totalPriceElement = document.getElementById('totalnolengurerrosogolla'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPayspongerosogolla() {
    const totalPriceElement = document.getElementById('totalspongerosogolla'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaychenarosogolla() {
    const totalPriceElement = document.getElementById('totalchenarosogolla'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaydryosogolla() {
    const totalPriceElement = document.getElementById('totaldryosogolla'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaykesarrosogolla() {
    const totalPriceElement = document.getElementById('totalkesarrosogolla'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaysabudanakhichri() {
    const totalPriceElement = document.getElementById('totalsabudanakhichri'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPaymasalakhichri() {
    const totalPriceElement = document.getElementById('totalmasalakhichri'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}



function proceedToPaymargheritapizza() {
    const totalPriceElement = document.getElementById('totalmargheritapizza'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaypepperonipizza() {
    const totalPriceElement = document.getElementById('totalpepperonipizza'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPaybbqpizza() {
    const totalPriceElement = document.getElementById('totalbbqpizza'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPayburstpizza() {
    const totalPriceElement = document.getElementById('totalburstpizza'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}



function proceedTopaydosa() {
    const totalPriceElement = document.getElementById('totaldosa'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaychickenroll() {
    const totalPriceElement = document.getElementById('totalchickenroll'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPayeggroll() {
    const totalPriceElement = document.getElementById('totaleggroll'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPayptroll() {
    const totalPriceElement = document.getElementById('totalptroll'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}

function proceedToPaymotonroll() {
    const totalPriceElement = document.getElementById('totalmotonroll') 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaycchickenroll() {
    const totalPriceElement = document.getElementById('totalcchickenroll'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}


function proceedToPaycreamypasta() {
    const totalPriceElement = document.getElementById('totalcreamypasta'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaypestopasta() {
    const totalPriceElement = document.getElementById('totalpestopasta'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaymcpasta() {
    const totalPriceElement = document.getElementById('totalmcpasta'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaygbpasta() {
    const totalPriceElement = document.getElementById('totalgbpasta'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPayctpasta() {
    const totalPriceElement = document.getElementById('totalctpasta'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}



function proceedToPaybutterchicken() {
    const totalPriceElement = document.getElementById('totalbutterchicken'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPayptmasala() {
    const totalPriceElement = document.getElementById('totalptmasala'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaydalmakhni() {
    const totalPriceElement = document.getElementById('totaldalmakhni'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaynanparatha() {
    const totalPriceElement = document.getElementById('totalnanparatha'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}



function proceedToPaychocodelight() {
    const totalPriceElement = document.getElementById('totalchocodelight'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPayclassicvenila() {
    const totalPriceElement = document.getElementById('totalclassicvenila'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaysbliss() {
    const totalPriceElement = document.getElementById('totalsbliss'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaycrunchybuttrscotch() {
    const totalPriceElement = document.getElementById('totalcrunchybuttrscotch'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaymangomagic() {
    const totalPriceElement = document.getElementById('totalmangomagic'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPayblackcburst() {
    const totalPriceElement = document.getElementById('totalblackcburst'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}






function proceedToPaychocodelight() {
    const totalPriceElement = document.getElementById('totalchocodelight'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPayvanillacake() {
    const totalPriceElement = document.getElementById('totalvanillacake'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPayredvelvet() {
    const totalPriceElement = document.getElementById('totalredvelvet'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPayblackforest() {
    const totalPriceElement = document.getElementById('totalblackforest'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
function proceedToPaystrawdreamcake() {
    const totalPriceElement = document.getElementById('totalstrawdreamcake'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPaynwcheesecake() {
    const totalPriceElement = document.getElementById('totalnwcheesecake'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}




function proceedToPayhakkanoodles() {
    const totalPriceElement = document.getElementById('totalhakkanoodles'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPayVegManchurian() {
    const totalPriceElement = document.getElementById('totalVegManchurian'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPayChillipanner() {
    const totalPriceElement = document.getElementById('totalChillipanner'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}function proceedToPayVegFriedrice() {
    const totalPriceElement = document.getElementById('totalVegFriedrice'); 
    let totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.replace('₹', '').trim()) : 0;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        window.location.href = `check.html?totalPrice=${encodeURIComponent(totalPrice)}`;
    } else {
        alert("Error: Unable to fetch total price.");
    }
}
