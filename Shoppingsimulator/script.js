/*let totalSum = 0;

// Function to add product name to the cashier screen and image to the shopping cart
function addToCart(productInfo) {
    var cashierScreen = document.getElementById('cashier-screen');
    var shoppingCart = document.getElementById('shopping-cart');
    
    // Extract product name and price
    var [productName, productPrice] = productInfo.split(' Rs ');
    productPrice = parseFloat(productPrice);

    // Adding product name and price to the cashier screen
    var productDiv = document.createElement('div');
    productDiv.textContent = `${productName} - Rs ${productPrice}`;
    productDiv.classList.add('product-name');
    cashierScreen.appendChild(productDiv);

    // Adding product image to the shopping cart
    var productImg = document.createElement('img');
    productImg.classList.add('cart-item');
    
    switch (productInfo) {
        case 'Product 1 Rs 100':
            productImg.src = 'home.jpeg';
            break;
        case 'Product 2 Rs 40':
            productImg.src = 'player_2.jpeg';
            break;
        case 'Product 3 Rs 30':
            productImg.src = 'grass.jpg';
            break;
        default:
            // Default image if no specific match found
            productImg.src = 'default.jpg';
            break;
    }
    
    shoppingCart.appendChild(productImg);

    // Update the total sum
    totalSum += productPrice;
    
}


// Function to display the total sum
function displayTotalSum() {
    const cashierScreen = document.getElementById('cashier-screen');
    let totalSumElement = document.getElementById('total-sum');

    if (!totalSumElement) {
        totalSumElement = document.createElement('p');
        totalSumElement.id = 'total-sum';
        cashierScreen.appendChild(totalSumElement);
    }

    totalSumElement.textContent = `Total: Rs ${totalSum.toFixed(2)}`;
}
previous*/


// script.js
let totalSum = 0;
let cart = {};  // Object to store product details

function addToCart(productInfo) {
    const cashierScreen = document.getElementById('cashier-screen');
    const cartItemsContainer = document.getElementById('cart-items');
    
    // Extract product name and price
    const [productName, productPrice] = productInfo.split(' Rs ');
    const price = parseFloat(productPrice);

    // Check if the product is already in the cart
    if (cart[productName]) {
        cart[productName].quantity += 1;
        cart[productName].totalPrice += price;
    } else {
        cart[productName] = {
            quantity: 1,
            totalPrice: price,
            imageSrc: getImageSrc(productInfo)
        };
    }

    // Clear and update the shopping cart
    cartItemsContainer.innerHTML = '';
    for (let item in cart) {
        const productImg = document.createElement('img');
        productImg.classList.add('cart-item');
        productImg.src = cart[item].imageSrc;
        cartItemsContainer.appendChild(productImg);
    }

    // Clear and update the cashier screen
    cashierScreen.innerHTML = '<p>Products bought</p>';
    for (let item in cart) {
        const productDiv = document.createElement('div');
        productDiv.textContent = `${item} - Rs ${cart[item].totalPrice.toFixed(2)} (Quantity: ${cart[item].quantity})`;
        productDiv.classList.add('product-name');
        cashierScreen.appendChild(productDiv);
    }

    // Update the total sum
    totalSum += price;
    displayTotalSum();
}

function getImageSrc(productInfo) {
    switch (productInfo) {
        case 'Product 1 Rs 100':
            return 'home.jpeg';
        case 'Product 2 Rs 40':
            return 'player_2.jpeg';
        case 'Product 3 Rs 30':
            return 'grass.jpg';
        default:
            return 'default.jpg';
    }
}

function displayTotalSum() {
    const cashierScreen = document.getElementById('cashier-screen');
    let totalSumElement = document.getElementById('total-sum');

    if (!totalSumElement) {
        totalSumElement = document.createElement('p');
        totalSumElement.id = 'total-sum';
        cashierScreen.appendChild(totalSumElement);
    }

    totalSumElement.textContent = `Total: Rs ${totalSum.toFixed(2)}`;
}
