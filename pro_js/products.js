function addToCart(event) {
    
    event.preventDefault();
    let quantity = document.querySelector(".quantity").value;
    let productName = document.querySelector(".pruoduct-name").textContent;
    let price = document.querySelector(".price").textContent.slice(8);

    const cartD = {
        name: productName,
        quant: quantity,
        price: price
    }
    let cart = JSON.parse(localStorage.getItem("cartData")) || [];
    cart.push(cartD)

    localStorage.setItem("cartData", JSON.stringify(cart));
    
}
