document.addEventListener("DOMContentLoaded", function () {
    let preloader = document.getElementById("preloder");

    
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1000);
});


// let section = document.querySelector(".card-list");

// let div = document.createElement("div");


// let cardata = localStorage.getItem("cartData");
// let data = JSON.parse(cardata);
// for(let i =0;i<data.length;i++)
// {
//     Object.entries(data[i]).forEach((key,value)=>{
//         div.innerHTML += `<p>${key[0]} == ${key[1]}</p>`;
       // console.log(key[0],key[1]);
//     })
//     console.log(data[i]);
// }

// section.appendChild(div);





let storeData = localStorage.getItem("user");


let userdata = JSON.parse(storeData);

let username = document.querySelector(".username");

username.innerHTML = userdata.name;




document.addEventListener("DOMContentLoaded", function () {
    let section = document.querySelector(".card-list");
    let section1 = document.querySelector(".bt-section");
    let section2 = document.querySelector(".bttn-section");
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

    section.innerHTML = ""; 

    if (cartData.length === 0) {
        section.innerHTML = "<p>Your cart is empty.</p>";
        section.style
        return;
    }

    let totalCartPrice = 0; 

    cartData.forEach((item, index) => {
        let div = document.createElement("div");
        div.classList.add("cart-card");

        let totalPrice = item.quant * item.price; 
        totalCartPrice += totalPrice; 

        div.innerHTML = `
            <h4>${item.name}</h4>
            <p>Quantity: ${item.quant}</p>
            <p>Price per unit: $${item.price}</p>
            <p><strong>Total Price: $${totalPrice}</strong></p>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;

        section.appendChild(div);
    });

    
    let totalDiv = document.createElement("div");
    totalDiv.classList.add("cart-total");
    totalDiv.innerHTML = `<h3>Total Cart Price: $${totalCartPrice}</h3>`;
    section1.appendChild(totalDiv);

    
    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("cart-buttons");
    buttonDiv.innerHTML = `
        <button class="buy-now">Buy Now</button>
    `;
    section2.appendChild(buttonDiv);

    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            cartData.splice(index, 1);
            localStorage.setItem("cartData", JSON.stringify(cartData));
            
        });
    });

    
    // document.querySelector(".buy-now").addEventListener("click", function () {
       
    //     window.location.href = "../html/ordershiped.html";
    // });
    document.querySelector(".buy-now").addEventListener("click", function () {
        let shippedOrders = JSON.parse(localStorage.getItem("shippedOrders")) || {};
        let user = JSON.parse(localStorage.getItem("user"));
    
        if (!user || !user.name) {
            alert("User not found!");
            return;
        }
    
        if (!shippedOrders[user.name]) {
            shippedOrders[user.name] = [];
        }
    
        shippedOrders[user.name] = shippedOrders[user.name].concat(cartData);
    
        localStorage.setItem("shippedOrders", JSON.stringify(shippedOrders));
    
        localStorage.removeItem("cartData");
    
        window.location.href = "../html/ordershiped.html";
    });
    

   
});
