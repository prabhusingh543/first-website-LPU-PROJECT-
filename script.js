

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

// let cartItems = [];
// let totalValue = 0;

// function addToCart(bookId, bookTitle, bookPrice) {
//     const existingItem = cartItems.find(item => item.id === bookId);

//     if (existingItem) {
//         existingItem.quantity++;
//     } else {
//         cartItems.push({
//             id: bookId,
//             title: bookTitle,
//             price: bookPrice,
//             quantity: 1
//         });
//     }

//     totalValue += bookPrice;

//     // Optionally, you can display a confirmation message or update the UI
//     alert(`Added ${bookTitle} to the cart!\nTotal Value: $${totalValue.toFixed(2)}`);
// }

// let cartItems = [];
// let totalValue = 0;

// Function to add a book to the cart
// function addToCart(bookId, price) {
//     const book = document.getElementById(bookId);
//     const title = book.querySelector('h3').innerText;
//     const rating = book.querySelector('.rating').innerText;

//     // Check if the book is already in the cart
//     const existingItem = cartItems.find(item => item.id === bookId);

//     if (existingItem) {
//         existingItem.quantity++;
//     } else {
//         cartItems.push({
//             id: bookId,
//             title: title,
//             price: price,
//             quantity: 1,
//             rating: rating
//         });
//     }

//     // Update total value
//     totalValue += price;

//     // Optionally, you can display a confirmation message or update the UI
//     alert(`Added ${title} to the cart!\nTotal Value: $${totalValue.toFixed(2)}`);
// }