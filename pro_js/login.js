document.addEventListener("DOMContentLoaded", function () {
    let storeData = localStorage.getItem("user");

    let loEmail = document.querySelector(".email-log");
    let loPassword = document.querySelector(".password-log");
    let loginButton = document.querySelector("button");

    

    let errorContainer = document.getElementById("login-error");
    if (!errorContainer) {
        errorContainer = document.createElement("p");
        errorContainer.id = "login-error";
        let form = document.querySelector("form");
        form.insertBefore(errorContainer, form.firstChild);
    }
    errorContainer.style.color = "red";
    errorContainer.style.fontSize = "14px";
    errorContainer.style.marginBottom = "10px";

    
    function login() {
        let userdata = JSON.parse(storeData);
        if (!(userdata.usremail && userdata.password)) {
            errorContainer.textContent = "No account found! Please register";
            return;
        }

        

        if (loEmail.value !== userdata.usremail) {
            errorContainer.textContent = "Password or Email is not correct";
            return;
        }

        if (loPassword.value !== userdata.password) {
            errorContainer.textContent = "Password or Email is not correct";
            return;
        }

        errorContainer.style.color = "green";
        errorContainer.textContent = "";
        
        setTimeout(() => {
            window.location.href = "../html/product.html"; 
        }, 1000);
    }

    loginButton.addEventListener("click", login);
});
