function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalValueElement = document.getElementById('total-value');

    // Clear previous items
    cartItemsContainer.innerHTML = '';

    // Update cart items
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('li');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <span>${item.title} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    // Update total value
    totalValueElement.textContent = `Total: $${totalValue.toFixed(2)}`;
}

// Call updateCart on page load to display any existing cart items
updateCart();