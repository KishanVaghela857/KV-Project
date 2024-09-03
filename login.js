let loginForm = document.getElementById("login-form");
let loginButton = document.getElementById("login-form-submit");
let loginErrorMsg = document.getElementById("login-error-msg");
let mainHolder = document.getElementById("main-holder")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "paraDox" && password === "paraDox0420") {
        alert("you have successfully logged in.");
        location.replace("paraDox/Fpage.html");
    } else {
        loginErrorMsg.style.height = "40px";
        loginErrorMsg.style.opacity = "100%";
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const emailInput = document.getElementById("username-field");
    const passwordInput = document.getElementById("password-field");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        if (emailInput.value.trim() === "") {
            alert("Please enter your email.");
            emailInput.focus();
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            isValid = false;
        }

        if (passwordInput.value.trim() === "") {
            alert("Please enter your password.");
            passwordInput.focus();
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

let parahide = document.getElementById("usepass")
let upget = document.getElementById("upget");
let loginpara = document.getElementById("login-para");
let x = document.getElementById("spanX");

upget.addEventListener("click", () => {
    parahide.style.opacity = "100%";
    parahide.style.marginBottom = "10px";
    loginpara.style.opacity = "0%";
});

x.addEventListener("click", () => {
    parahide.style.opacity = "0%";
    loginpara.style.opacity = "100%";
})