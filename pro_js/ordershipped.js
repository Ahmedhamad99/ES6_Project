document.addEventListener("DOMContentLoaded", function () {
    let shippedOrders = JSON.parse(localStorage.getItem("shippedOrders")) || {};
    let user = JSON.parse(localStorage.getItem("user"));
    let section = document.querySelector(".shipped-list");
    let truck = document.querySelector(".truck-animation");

    if (!user || !user.name || !shippedOrders[user.name] || shippedOrders[user.name].length === 0) {
        section.innerHTML = "<p>No shipped orders found.</p>";
        return;
    }

    truck.style.display = "block"; 
});
