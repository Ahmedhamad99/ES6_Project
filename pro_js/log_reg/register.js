



document.addEventListener("DOMContentLoaded", function () {
    let usrName = document.querySelector("#name");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirm-password");
    let form = document.querySelector("form");

    function showError(input, message) {
        let parentDiv = input.closest(".input-group"); 
        let errorMsg = parentDiv.nextElementSibling; 

        if (!errorMsg || !errorMsg.classList.contains("error-message")) {
            errorMsg = document.createElement("span");
            errorMsg.classList.add("error-message");
            errorMsg.style.color = "red";
            errorMsg.style.display = "block";
            errorMsg.style.marginTop = "5px";
            errorMsg.style.fontSize = "14px";
            parentDiv.after(errorMsg);
        }

        errorMsg.innerHTML = message ? `<i class="bi bi-x-circle"></i> ${message}` : "";
        errorMsg.style.display = message ? "block" : "none";
    }

    
    usrName.addEventListener("input", function () {
        let nameRegex = /^[A-Za-z\s]+$/; 
        if (!nameRegex.test(usrName.value.trim())) {
            showError(usrName, "The name must contain only letters without numbers!");
        } else if (usrName.value.trim().length < 3) {
            showError(usrName, "The name must be at least 3 characters long!");
        } else {
            showError(usrName, "");
        }
    });

    
    email.addEventListener("input", function () {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            showError(email, "Invalid email format!");
        } else {
            showError(email, "");
        }
    });


    password.addEventListener("input", function () {
        if (password.value.length < 7) {
            showError(password, "The password must be at least 7 characters long!");
        } else {
            showError(password, "");
        }
    });

    confirmPassword.addEventListener("input", function () {
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, "Passwords do not match!");
        } else {
            showError(confirmPassword, "");
        }
    });

    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        if (usrName.closest(".input-group").nextElementSibling?.textContent !== "") isValid = false;
        if (email.closest(".input-group").nextElementSibling?.textContent !== "") isValid = false;
        if (password.closest(".input-group").nextElementSibling?.textContent !== "") isValid = false;
        if (confirmPassword.closest(".input-group").nextElementSibling?.textContent !== "") isValid = false;

        if (!isValid) return;

        const userData = {
            name: usrName.value,
            usremail: email.value,
            password: password.value
        };

        localStorage.setItem("user", JSON.stringify(userData));
        window.location.href = "login.html";
    });
});






