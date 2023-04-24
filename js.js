let addToCartButtons = document.querySelectorAll('.add-to-cart');
let cart = document.querySelector('.cart ul');

addToCartButtons.forEach(button => {
	button.addEventListener('click', function() {
		let productName = button.parentNode.querySelector('h3').textContent;
		let productPrice = button.parentNode.querySelector('p').textContent;
		let cartItem = document.createElement('li');
		cartItem.innerHTML = productName + ' - ' + productPrice;
		cart.appendChild(cartItem);
	});
});

let cartItems = document.querySelectorAll('.cart');

cartItems.forEach(item => {
	item.addEventListener('click', function() {
		item.parentNode.removeChild(item);
	});
});
